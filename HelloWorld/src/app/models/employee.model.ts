import { User } from './user.model';
export class Employee extends User {
  jobTitle: string;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    jobTitle: string
  ) {
    super(id, name, email, phone);

    this.jobTitle = jobTitle;
  }
}
