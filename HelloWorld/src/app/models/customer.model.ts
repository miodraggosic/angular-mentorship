import { User } from './user.model';
import { Address } from './address.model';
export class Customer extends User {
  private address: Address;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    address: Address
  ) {
    super(id, name, email, phone);
    this.address = address;
  }

  printAbout(): string {
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone +381${this.phone}.`;
  }

  getName(): string {
    return this.name;
  }
}
