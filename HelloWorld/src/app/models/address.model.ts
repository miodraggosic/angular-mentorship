import { User } from './user.model';
export class Address extends User {
  street: string;
  houseNum: number;
  city: string;
  country: string;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    street: string,
    houseNum: number,
    city: string,
    country: string
  ) {
    super(id, name, email, phone);
    this.street = street;
    this.houseNum = houseNum;
    this.city = city;
    this.country = country;
  }
}
