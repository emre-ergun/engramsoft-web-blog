export type Theme = 'dark' | 'light';

export type Post = {
  id: number;
  title: string;
  keywords: string[];
  author: string;
  cover_image?: string;
  created_at: string;
  description: string;
  ai_generated: boolean;
};
