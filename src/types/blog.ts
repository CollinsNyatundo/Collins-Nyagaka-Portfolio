export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  status: 'draft' | 'published';
}