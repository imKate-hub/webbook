export enum MainCategory {
  LITERATURE = 'Văn học',
  SELF_HELP = 'Self-help / Phát triển bản thân',
  BUSINESS = 'Kinh tế – Kỹ năng – Kinh doanh'
}

export type SubCategory = string;

export interface CategoryStructure {
  name: MainCategory;
  subCategories: SubCategory[];
  icon: string;
  description: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: MainCategory;
  subCategory: SubCategory;
  coverUrl: string;
  content: string;
  rating: number; // 1-5
  createdAt: number;
  summary?: string; // AI Generated summary
}

export type TabView = 'home' | 'blog' | 'personal' | 'youtube' | 'english';
