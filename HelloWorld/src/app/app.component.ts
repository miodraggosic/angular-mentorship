import { BaseEntity } from './models/baseEntity.interface';
import { Product } from './models/pruduct.model';
import { User } from './models/user.model';
import { Customer } from './models/customer.model';
import { Employee } from './models/employee.model';
import { Candidate } from './models/candidate.model';
import { Candidate as SingleCandidate } from './models/candidate.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';

  ngOnInit(): void {
    //Task 1
    const candidate1 = new Candidate('Miodrag', 'Gosic', new Date(1988, 9, 12));
    const candidate2 = new Candidate('Julijus', 'Mejn', new Date(1985, 4, 4));
    const candidate3 = new Candidate(
      'Petar',
      'Petrovic',
      new Date(1962, 5, 23)
    );

    console.log(candidate1, candidate2);

    //Task2

    const candidates: SingleCandidate[] = [candidate1, candidate2, candidate3];

    console.log(candidates);

    //Task 3

    console.log(this.printCandidate(candidates));

    //Task 4

    const employee1 = new Employee(
      1,
      'Petko',
      'petko@gmail.com',
      662145458,
      'front-end developer'
    );
    const employee2 = new Employee(
      2,
      'Sreten',
      'sreten10@gmail.com',
      617875458,
      'back-end developer'
    );

    console.log(employee1, employee2);

    //Task 5

    const customer1 = new Customer(
      3,
      'Milentije',
      'milentije@gmail.com',
      648562147,
      'Milentija Popovica',
      47,
      'Beograd',
      'Srbija'
    );

    console.log(customer1.printAbout());

    //Task 6

    const customer2 = new Customer(
      4,
      'Valentino',
      'valentino13@gmail.com',
      648356147,
      'Valentina Vodnika',
      47,
      'Novi Sad',
      'Srbija'
    );

    console.log(customer2.getName());

    //Task 8

    const user1 = new User(5, 'Marko', 'marko@yahoo.com', 65146987);

    const customer3 = new Customer(
      6,
      'Nevena',
      'nevena@gmail.com',
      632145878,
      'Takovska',
      12,
      'Nis',
      'Srbija'
    );

    const employee3 = new Employee(
      7,
      'Radovan',
      'radovan@gmail.com',
      69321478,
      'back-end dev'
    );

    console.log('Task 8', user1, customer3, employee3);

    //Task 9

    const product1 = new Product(
      10,
      'banana',
      2.14,
      'Bananas contain fiber, potassium, folate, and antioxidants, such as vitamin C. All of these support heart health.'
    );
    const product2 = new Product(
      11,
      'kiwi',
      1.35,
      'Kiwis are high in Vitamin C and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity.'
    );
    const product3 = new Product(
      12,
      'orange',
      1.67,
      'Oranges are rich in nutrients like Vitamin A, Vitamin C and potassium which are great for your eyes. So, if you want your vision to be just as good as it is now, eat an orange every day!'
    );
    const product4 = new Product(
      13,
      'apple',
      1.12,
      'Apples are an incredibly nutritious fruit that offers multiple health benefits. They are rich in fiber and antioxidants.'
    );
    const product5 = new Product(
      14,
      'leamon',
      2.44,
      'Lemons contain a high amount of vitamin C, soluble fiber, and plant compounds that give them a number of health benefits.'
    );
    console.log('Task 9');

    console.log(product1.getDescription());
    console.log(product2.getPrice());
    console.log(product4.getTitle());
    console.log(product5.getDescription());

    //Task 10

    const product6 = new Product(
      15,
      'melon',
      1.74,
      'Watermelon is a sweet and refreshing low calorie summer snack.'
    );
    const product7 = new Product(
      16,
      'plum',
      1.04,
      'Plums are chock full of fiber, which helps slow down a blood sugar spike after you eat carbs.'
    );

    const user2 = new User(8, 'Stefana', 'stefana@gmail.com', 60569875);
    const user3 = new User(9, 'Stefan', 'stefalko@gmail.com', 63215489);

    const customer4 = new Customer(
      16,
      'David',
      'davidow@gmail.com',
      61245876,
      'Kosovska',
      14,
      'Novi Sad',
      'Srbija'
    );
    const customer5 = new Customer(
      17,
      'Momcilo',
      'momo@gmail.com',
      612475226,
      'Ustanicka',
      37,
      'Pirot',
      'Srbija'
    );

    const employee4 = new Employee(
      18,
      'Milovan',
      'mile@gmail.com',
      69821477,
      'back-end dev'
    );
    const employee5 = new Employee(
      19,
      'Goran',
      'gile@gmail.com',
      694466477,
      'front-end dev'
    );

    const baseUser: BaseEntity = {
      id: 20,
    };

    console.log('Task 10', user2, customer4, employee5);

    console.log(baseUser);
    console.log(
      'A class is a blueprint from which we can create objects that share the same configuration - properties and methods. An interface is a group of related properties and methods that describe an object, but neither provides implementation nor initialisation for them.'
    );

    //Task 11

    const user4 = new User(21, 'Bosko', 'boki@yahho.mail', 61452879);
    console.log('Task 11');

    user4.sayHello();

    const product8 = new Product(
      22,
      'apricot',
      2.02,
      'Apricots are a great source of many antioxidants, including beta carotene and vitamins A, C, and E.'
    );
    product8.sayHello();

    const customer6 = new Customer(
      22,
      'Andrija',
      'andre@gmail.com',
      62456985,
      'Uspenska',
      35,
      'Novi Sad',
      'Srbija'
    );
    customer6.sayHello();

    const employee6 = new Employee(
      23,
      'Milica',
      'mila@gmail.com',
      66785423,
      'dev-ops'
    );
    employee6.sayHello();
  }

  printCandidate(candidates: SingleCandidate[]): string {
    let display: string = '';
    for (const candidate of candidates) {
      display += ` ${candidate.firstName} ${
        candidate.lastName
      }: ${candidate.birthday.toDateString()};`;
    }

    return display;
  }
}
