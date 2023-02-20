import { Address } from './address.model';
export class Customer extends Address {
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
    super(id, name, email, phone, street, houseNum, city, country);
  }

  printAbout(): string {
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone +381${this.phone}.`;
  }

  getName(): string {
    return this.name;
  }
}
