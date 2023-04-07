import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  OperatorFunction,
  Subject,
  catchError,
  combineLatest,
  debounceTime,
  forkJoin,
  fromEvent,
  interval,
  map,
  of,
  pipe,
  retry,
  takeUntil,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Teams } from './models/interfaces/teams.interface';
import { Words } from './models/interfaces/words.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  //Task1
  curentTime$!: Observable<string>;

  //Task2
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

  private intervalSubscription$ = new Subject<boolean>();
  private timerSubscription$ = new Subject<boolean>();
  private unsuscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    //Task1
    this.logCurentTime();

    //Task 2
    this.logSearch();

    //Task3
    this.logCombinedSearch();

    //Task 4
    this.logDataForkJoin();

    //Task 5
    this.logCombinedNumbers();

    //Task 6
    this.logDataError();
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

  // Helper Functions
  private mapInput(): OperatorFunction<Event, string> {
    return pipe(map((elem: Event) => (elem.target as HTMLInputElement).value));
  }
  private mapInputNumbers(): OperatorFunction<Event, number> {
    return pipe(
      map((elem: Event) => Number((elem.target as HTMLInputElement).value))
    );
  }

  private logCurentTime(): void {
    this.curentTime$ = interval(1000).pipe(
      map(() => new Date().toLocaleTimeString()),
      takeUntil(this.intervalSubscription$)
    );
    this.curentTime$.subscribe((value) => console.log(value));
  }

  private logSearch() {
    this.searchInput$ = fromEvent(
      document.getElementById('input-search1')!,
      'change'
    ).pipe(this.mapInput(), debounceTime(500), takeUntil(this.unsuscribe$));

    this.searchInput$.subscribe((elem: string) =>
      console.log('Search Input:', elem)
    );
  }

  private logCombinedSearch() {
    this.input1$ = fromEvent(
      document.getElementById('input-search2')!,
      'change'
    ).pipe(this.mapInput(), takeUntil(this.unsuscribe$));

    this.input2$ = fromEvent(
      document.getElementById('input-search3')!,
      'change'
    ).pipe(this.mapInput(), takeUntil(this.unsuscribe$));

    this.result$ = combineLatest([this.input1$, this.input2$]).pipe(
      map(([input1, input2]) => input1 + input2),
      takeUntil(this.unsuscribe$)
    );

    this.result$.subscribe((value) => {
      console.log('Combined value:', value);
    });
  }

  private logDataForkJoin() {
    this.data1$ = ajax<Words>(
      'https://api.datamuse.com/words?ml=ringing+in+the+ears'
    ).pipe(map((data) => data.response));

    this.data2$ = ajax<Teams>('https://www.balldontlie.io/api/v1/teams').pipe(
      map((data) => data.response)
    );

    forkJoin([this.data1$, this.data2$])
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe((value) => console.log('Api response data:', value));
  }

  private logCombinedNumbers() {
    this.inputNumber1$ = fromEvent(
      document.getElementById('input-search4')!,
      'change'
    ).pipe(this.mapInputNumbers(), takeUntil(this.unsuscribe$));

    this.inputNumber2$ = fromEvent(
      document.getElementById('input-search5')!,
      'change'
    ).pipe(this.mapInputNumbers(), takeUntil(this.unsuscribe$));

    this.sum$ = combineLatest([this.inputNumber1$, this.inputNumber2$]).pipe(
      map(([input1, input2]) => input1 + input2),
      takeUntil(this.unsuscribe$)
    );

    this.sum$.subscribe((value) => console.log('Sum of values:', value));
  }

  private logDataError() {
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

  private unsubscribe() {
    this.unsuscribe$.next(true);
    this.unsuscribe$.complete();
  }
}
