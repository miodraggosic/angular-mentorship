import { BaseType } from './baseType.interface';

export interface Book extends BaseType {
  dateCreated: Date;
  author: string;
  numberOfStars: number;
  category: string;
}
