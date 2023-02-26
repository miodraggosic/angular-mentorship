import { CommonFields } from './CommonFields.interface';

export interface Job extends CommonFields {
  workHours: number;
  pricePerHour: number;
  getSalary?: () => number;
}
