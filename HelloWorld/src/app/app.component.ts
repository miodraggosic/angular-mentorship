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
      'Milentija Popovica 34'
    );

    console.log(customer1.printAbout());

    //Task 6

    const customer2 = new Customer(
      3,
      'Valentino',
      'valentino13@gmail.com',
      648356147,
      'Valentina Vodnika 47'
    );

    console.log(customer2.getName());
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
