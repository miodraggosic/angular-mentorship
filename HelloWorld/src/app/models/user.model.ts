import { BaseEntity } from './baseEntity.interface';
export class User implements BaseEntity {
  readonly id: number;
  protected name: string;
  protected email: string;
  protected phone: number;

  constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  sayHello(): void {
    console.log('Hello from User class');
  }
}
