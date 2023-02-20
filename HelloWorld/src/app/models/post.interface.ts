import { BaseType } from './baseType.interface';
export interface Post extends BaseType {
  dateCreated: Date;
  numberOfLikes: number;
}
