import { CommonFields } from './CommonFields.interface';

export interface Book extends CommonFields {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
