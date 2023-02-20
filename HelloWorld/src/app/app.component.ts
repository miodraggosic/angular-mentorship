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
    const candidate1 = new Candidate('Miodrag', 'Gosic', new Date(1999, 9, 9));
    const candidate2 = new Candidate('Julijus', 'Mejn', new Date(1985, 4, 4));

    console.log(candidate1, candidate2);

    //Task2

    const candidates: SingleCandidate[] = [candidate1, candidate2];

    console.log(candidates);
  }
}
