import { Job as singleJob } from './job.interface';
export class Job implements singleJob {
  id: number;
  title: string;
  description: string;
  workHours: number;
  pricePerHour: number;

  constructor(
    id: number,
    title: string,
    description: string,
    workHours: number,
    pricePerHour: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.workHours = workHours;
    this.pricePerHour = pricePerHour;
  }

  getSalary(): number {
    return this.workHours! * this.pricePerHour!;
  }
}
