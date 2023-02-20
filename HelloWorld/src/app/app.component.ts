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
      3,
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

    const user = new User(4, 'Marko', 'marko@yahoo.com', 65146987);

    const customer3 = new Customer(
      5,
      'Nevena',
      'nevena@gmail.com',
      632145878,
      'Takovska',
      12,
      'Nis',
      'Srbija'
    );

    const employee3 = new Employee(
      6,
      'Radovan',
      'radovan@gmail.com',
      69321478,
      'back-end dev'
    );

    console.log('Task 8', user, customer3, employee3);

    //Task 9

    const banana = new Product(
      10,
      'banana',
      2.14,
      'Bananas contain fiber, potassium, folate, and antioxidants, such as vitamin C. All of these support heart health.'
    );
    const kiwi = new Product(
      11,
      'kiwi',
      1.35,
      'Kiwis are high in Vitamin C and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity.'
    );
    const orange = new Product(
      12,
      'orange',
      1.67,
      'Oranges are rich in nutrients like Vitamin A, Vitamin C and potassium which are great for your eyes. So, if you want your vision to be just as good as it is now, eat an orange every day!'
    );
    const apple = new Product(
      13,
      'apple',
      1.12,
      'Apples are an incredibly nutritious fruit that offers multiple health benefits. They are rich in fiber and antioxidants.'
    );
    const leamon = new Product(
      14,
      'leamon',
      2.44,
      'Lemons contain a high amount of vitamin C, soluble fiber, and plant compounds that give them a number of health benefits.'
    );
    console.log('Task 9');

    console.log(banana.getDescription());
    console.log(kiwi.getPrice());
    console.log(apple.getTitle());
    console.log(orange.getDescription());
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
