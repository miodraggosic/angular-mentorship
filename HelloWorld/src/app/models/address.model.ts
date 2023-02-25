export class Address {
  street: string;
  houseNum: number;
  city: string;
  country: string;

  constructor(street: string, houseNum: number, city: string, country: string) {
    this.street = street;
    this.houseNum = houseNum;
    this.city = city;
    this.country = country;
  }
}
