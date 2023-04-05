import { Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss'],
})
export class BookOverviewComponent implements OnInit, OnDestroy {
  book?: Book | undefined;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById() {
    const bookId: number = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
    this.booksService
      .getById(bookId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((book) => (this.book = book));
  }

  unsubscribeAll() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }
}
