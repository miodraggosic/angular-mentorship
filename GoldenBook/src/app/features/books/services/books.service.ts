import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from '@mocks/mock-books';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = books;

  constructor(private httpClientService: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.httpClientService
      .get<Book[]>(`${environment.baseApiUrl}books?deletedAt=null`)
      .pipe(map((data) => data));
  }

  delete(id: number): Observable<{}> {
    return this.httpClientService.delete(
      `${environment.baseApiUrl}books/${id}`
    );
  }

  getById(id: number): Observable<Book | undefined> {
    const book = of(this.books).pipe(
      map((books) => books.find((book) => book.id === id))
    );
    return book;
  }
}
