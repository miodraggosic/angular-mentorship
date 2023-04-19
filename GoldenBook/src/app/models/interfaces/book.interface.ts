import { Categories } from '../enums/categories.enum';

export interface Book {
  imageUrl: string;
  title: string;
  author: string;
  country: string;
  isbn: number;
  year: string;
  category: string;
  description: string;
  reviewer: string;
  comment: string;
  deletedAt: null | string;
  id: number;
}
