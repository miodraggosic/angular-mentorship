export class Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  getPrice(): number {
    return this.price;
  }
  getTitle(): string {
    return this.title;
  }
  getDescription(): string {
    return this.description;
  }
}
