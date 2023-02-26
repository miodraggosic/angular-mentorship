import { CommonFields } from './CommonFields.interface';
export interface Post extends CommonFields {
  dateCreated: Date;
  numberOfLikes: number;
}
