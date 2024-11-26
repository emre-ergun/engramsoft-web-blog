import { supabase } from '@/lib/supabase';
import { useQuery, useMutation } from '@tanstack/react-query';

export const usePostLists = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase.from('posts').select('*');
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
        })
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return newPost;
    },
  });
};
