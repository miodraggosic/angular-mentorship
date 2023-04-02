import { Component, OnDestroy, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  combineLatest,
  debounceTime,
  forkJoin,
  fromEvent,
  interval,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { Words } from './models/interfaces/words.interface';
import { Teams } from './models/interfaces/teams.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  curentTime$: Observable<string> = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );

  searchInput$!: Observable<string>;

  //Task3

  input1$!: Observable<string>;
  input2$!: Observable<string>;

  result$!: Observable<string[]>;

  //Task4

  data1$!: Observable<Words>;
  data2$!: Observable<Teams>;

  private intervalSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    //Task1
    this.intervalSubscription.add(
      this.curentTime$.subscribe((value) => console.log(value))
    );

    //Task 2
    this.searchInput$ = fromEvent(
      document.getElementById('input-search1')!,
      'change'
    ).pipe(
      map((elem: Event) => (elem.target as HTMLInputElement).value),
      debounceTime(500)
    );

    this.searchInput$.subscribe((elem: string) =>
      console.log('Search Input:', elem)
    );

    //Task3
    this.input1$ = fromEvent(
      document.getElementById('input-search2')!,
      'change'
    ).pipe(map((elem) => (elem.target as HTMLInputElement).value));

    this.input2$ = fromEvent(
      document.getElementById('input-search3')!,
      'change'
    ).pipe(map((elem) => (elem.target as HTMLInputElement).value));

    this.result$ = combineLatest([this.input1$, this.input2$]);

    this.result$.subscribe((value) => {
      console.log('Combined value array:', value);
    });

    //Task 4
    this.data1$ = ajax<Words>(
      'https://api.datamuse.com/words?ml=ringing+in+the+ears'
    ).pipe(map((data) => data.response));

    this.data2$ = ajax<Teams>('https://www.balldontlie.io/api/v1/teams').pipe(
      map((data) => data.response)
    );

    forkJoin([this.data1$, this.data2$]).subscribe((value) =>
      console.log('Api response data:', value)
    );
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
