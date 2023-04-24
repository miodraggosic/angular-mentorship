import { Review } from './review.interface';

export interface Book {
  imageUrl: string;
  title: string;
  author: string;
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
