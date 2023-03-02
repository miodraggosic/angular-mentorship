import { Categories } from '../enums/category.enum';

export interface Book {
  imageUrl: string;
  title: string;
  author: string;
  year: string;
  category: Categories;
  description: string;
}
