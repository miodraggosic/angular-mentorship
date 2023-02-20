export class Customer {
  private id: number;
  private name: string;
  private email: string;
  private phone: number;
  private address: string;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    address: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  printAbout(): string {
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone +381${this.phone}.`;
  }
}
