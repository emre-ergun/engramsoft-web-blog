import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

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
    queryKey: ['post', id],
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
