import { Candidate } from './models/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'My First app';

  ngOnInit(): void {
    const candidate1 = new Candidate('Miodrag', 'Gosic', new Date(1999, 9, 9));
    const candidate2 = new Candidate('Julijus', 'Mejn', new Date(1985, 4, 4));

    console.log(candidate1, candidate2);
  }
}
