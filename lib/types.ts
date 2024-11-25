export type Theme = 'dark' | 'light';

export type Post = {
  id: number;
  title: string;
  content: string;
  keywords: string[];
  author: string;
  cover_image?: string;
  created_at: string;
};
