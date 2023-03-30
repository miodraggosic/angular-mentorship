import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  debounceTime,
  fromEvent,
  interval,
  map,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  //Task1

  curentTime$ = interval(1000);

  //Task 2

  searchInput$ = fromEvent<InputEvent>(document, 'change').pipe(
    debounceTime(1000)
  );

  //Task3
  input1$ = fromEvent<InputEvent>(document, 'change').pipe(
    map((elem) => (elem.target as HTMLInputElement).value)
  );
  input2$ = fromEvent<InputEvent>(document, 'change').pipe(
    map((elem) => (elem.target as HTMLInputElement).value)
  );

  result$ = combineLatest([this.input1$, this.input2$]);

  private intervalSubscription?: Subscription = new Subscription();

  ngOnInit(): void {
    this.intervalSubscription?.add(
      this.curentTime$.subscribe({
        next() {
          console.log(new Date().toLocaleTimeString());
        },
      })
    );

    this.searchInput$.subscribe((elem) =>
      console.log((elem.target as HTMLInputElement).value)
    );

    this.result$.subscribe((value) => {
      console.log(value);
    });
  }
  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
