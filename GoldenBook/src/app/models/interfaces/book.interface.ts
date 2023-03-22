import { Categories } from '../enums/categories.enum';

export interface Book {
  imageUrl: string;
  title: string;
  author: string;
  year: string;
  category: Categories;
  description: string;
  id: number;
}
