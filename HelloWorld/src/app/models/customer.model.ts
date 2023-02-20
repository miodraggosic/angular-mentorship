import { Address } from './address.model';
export class Customer extends Address {
  private id: number;
  private name: string;
  private email: string;
  private phone: number;

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
    super(street, houseNum, city, country);
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  printAbout(): string {
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone +381${this.phone}.`;
  }

  getName(): string {
    return this.name;
  }
}
