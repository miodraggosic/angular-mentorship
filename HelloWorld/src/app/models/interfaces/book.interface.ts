import { CommonFields } from './commonFields.interface';

export interface Book extends CommonFields {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
