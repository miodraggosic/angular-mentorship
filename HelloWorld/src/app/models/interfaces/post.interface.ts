import { CommonFields } from './commonFields.interface';
export interface Post extends CommonFields {
  dateCreated: Date;
  numberOfLikes: number;
}
