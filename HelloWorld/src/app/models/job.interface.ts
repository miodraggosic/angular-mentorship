import { BaseType } from './baseType.interface';

export interface Job extends BaseType {
  workHours: number;
  pricePerHour: number;
}
