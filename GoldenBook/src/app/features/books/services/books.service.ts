import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from 'src/app/mocks/mock-books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = books;

  constructor() {}

  getAll(): Observable<Book[]> {
    return of(books);
  }

  getById(id: number): Observable<Book | undefined> {
    const book = of(this.books).pipe(
      map((books) => books.find((book) => book.id === id))
    );
    return book;
  }
}
