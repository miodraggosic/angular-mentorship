import { Component, OnInit } from '@angular/core';
import { switchMap, take } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  displayValue: string = '';
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  showValue(event: string): void {
    this.displayValue = event;
  }

  deleteBook(book: Book): void {
    this.booksService
      .delete(book.id)
      .pipe(
        take(1),
        switchMap(() => this.booksService.getAll())
      )
      .subscribe((data: Book[]) => (this.books = data));
  }

  softDeleteBook(book: Book): void {
    this.booksService
      .softDelete(book.id)
      .pipe(
        take(1),
        switchMap(() => this.booksService.getAll())
      )
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

  private getBooks(): void {
    this.booksService
      .getAll()
      .pipe(take(1))
      .subscribe((data: Book[]) => (this.books = data));
  }
}
