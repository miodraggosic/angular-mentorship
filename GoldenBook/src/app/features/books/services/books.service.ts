import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from 'src/app/models/mock-books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = books;

  constructor() {}

  getAll(): Observable<Book[]> {
    return of(books);
  }
}
