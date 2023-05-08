import { Review } from './review.interface';

export interface Book {
  imageUrl: string;
  title: string;
  author: Author;
  country: string;
  isbn: number;
  year: string;
  category: string;
  description: string;
  review: Review;
  comment: string;
  deletedAt: null | string;
  id: number;
}

export interface Author {
  firstName: string;
  lastName: string;
}
