import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  displayValue: string = '';
  books: Book[] = [];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  showValue(event: string): void {
    this.displayValue = event;
  }

  private getBooks(): void {
    this.booksService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Book[]) => (this.books = data));
  }

  private unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
