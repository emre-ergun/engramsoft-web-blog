import { supabase } from '@/lib/supabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostLists = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('id', { ascending: false });
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const usePostListsByKeyword = (keyword: string) => {
  return useQuery({
    queryKey: ['posts', keyword],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .contains('keywords', [`${keyword}`]);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const useInsertPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['posts'],
    mutationFn: async (data: {
      profile_id: string;
      title: string;
      description: string;
      content: string;
      keywords: string[];
      cover_image: string;
      author: string;
      ai_generated: boolean;
    }) => {
      const { data: newPost, error } = await supabase
        .from('posts')
        .insert({
          profile_id: data.profile_id,
          title: data.title,
          description: data.description,
          content: data.content,
          keywords: data.keywords,
          cover_image: data.cover_image,
          author: data.author,
          ai_generated: data.ai_generated,
        })
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return newPost;
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['posts'],
    mutationFn: async (data: {
      id: number;
      profile_id: string;
      title: string;
      description: string;
      content: string;
      keywords: string[];
      cover_image: string;
      author: string;
      ai_generated: boolean;
    }) => {
      const { data: updatedPost, error } = await supabase
        .from('posts')
        .update({
          profile_id: data.profile_id,
          title: data.title,
          description: data.description,
          content: data.content,
          keywords: data.keywords,
          cover_image: data.cover_image,
          author: data.author,
          ai_generated: data.ai_generated,
        })
        .eq('id', data.id)
        .select()
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return updatedPost;
    },
    async onSuccess(_, { id }) {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      await queryClient.invalidateQueries({ queryKey: ['posts', id] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['posts'],
    mutationFn: async (id: number) => {
      await supabase.from('posts').delete().eq('id', id);
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
