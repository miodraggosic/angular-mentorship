import { Component, OnDestroy, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  combineLatest,
  debounceTime,
  forkJoin,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  retry,
  Subject,
  takeUntil,
  timer,
} from 'rxjs';
import { Words } from './models/interfaces/words.interface';
import { Teams } from './models/interfaces/teams.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private intervalSubscription$ = new Subject<boolean>();
  private timerSubscription$ = new Subject<boolean>();
  private unsuscribe$ = new Subject<boolean>();

  curentTime$: Observable<string> = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString()),
    takeUntil(this.intervalSubscription$)
  );

  searchInput$!: Observable<string>;

  //Task3
  input1$!: Observable<string>;
  input2$!: Observable<string>;

  result$!: Observable<string>;

  //Task4
  data1$!: Observable<Words>;
  data2$!: Observable<Teams>;

  //Task5
  inputNumber1$!: Observable<number>;
  inputNumber2$!: Observable<number>;

  sum$!: Observable<number>;

  //Task 6
  data$!: Observable<Teams>;

  //Task 7
  timer$!: Observable<number>;
  count!: number;

  ngOnInit(): void {
    //Task1
    this.curentTime$.subscribe((value) => console.log(value));

    //Task 2
    this.searchInput$ = fromEvent(
      document.getElementById('input-search1')!,
      'change'
    ).pipe(
      map((elem: Event) => (elem.target as HTMLInputElement).value),
      debounceTime(500),
      takeUntil(this.unsuscribe$)
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

    this.result$ = combineLatest([this.input1$, this.input2$]).pipe(
      map(([input1, input2]) => input1 + input2),
      takeUntil(this.unsuscribe$)
    );

    this.result$.subscribe((value) => {
      console.log('Combined value:', value);
    });

    //Task 4
    this.data1$ = ajax<Words>(
      'https://api.datamuse.com/words?ml=ringing+in+the+ears'
    ).pipe(map((data) => data.response));

    this.data2$ = ajax<Teams>('https://www.balldontlie.io/api/v1/teams').pipe(
      map((data) => data.response)
    );

    forkJoin([this.data1$, this.data2$])
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe((value) => console.log('Api response data:', value));

    //Task 5
    this.inputNumber1$ = fromEvent(
      document.getElementById('input-search4')!,
      'change'
    ).pipe(map((input) => Number((input.target as HTMLInputElement).value)));

    this.inputNumber2$ = fromEvent(
      document.getElementById('input-search5')!,
      'change'
    ).pipe(map((input) => Number((input.target as HTMLInputElement).value)));

    this.sum$ = combineLatest([this.inputNumber1$, this.inputNumber2$]).pipe(
      map(([input1, input2]) => input1 + input2),
      takeUntil(this.unsuscribe$)
    );

    this.sum$.subscribe((value) => console.log('Sum of values:', value));

    //Task 6
    this.data$ = ajax<Teams>('https://www.balldontlie.io/api/v1/team').pipe(
      map((data) => {
        if (!data) {
          throw new Error();
        }
        return data.response;
      }),
      retry(3),
      catchError((err) => {
        console.log('Error receiving data');
        return of(err.message);
      }),
      takeUntil(this.unsuscribe$)
    );

    this.data$.subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  stopInterval() {
    this.intervalSubscription$.next(true);
    this.intervalSubscription$.complete();
  }

  //Task 7
  startTimer() {
    this.timer$ = timer(0, 1000).pipe(takeUntil(this.timerSubscription$));
    this.timer$.subscribe((value) => (this.count = value));
  }

  stopTimer() {
    this.timerSubscription$.next(true);
    this.timerSubscription$.complete();
  }

  unsubscribe() {
    this.unsuscribe$.next(true);
    this.unsuscribe$.complete();
  }
}
