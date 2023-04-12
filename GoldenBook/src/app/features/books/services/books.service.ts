import { Injectable } from '@angular/core';
import { Observable, of, map, catchError, retry } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from '@mocks/mock-books';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = books;

  private booksUrl: string = `${environment.baseApiUrl}books`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClientService: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.httpClientService
      .get<Book[]>(`${this.booksUrl}?deletedAt=null`)
      .pipe(
        map((data) => data),
        retry(2),
        catchError(this.handleError('Get books', []))
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClientService
      .delete(`${this.booksUrl}/${id}`)
      .pipe(catchError(this.handleError('Delete', [])));
  }

  getById(id: number): Observable<Book | undefined> {
    const book = of(this.books).pipe(
      map((books) => books.find((book) => book.id === id))
    );
    return book;
  }

  softDelete(id: number): Observable<any> {
    const date: string = new Date().toISOString();
    const body = {
      deletedAt: date,
    };
    return this.httpClientService
      .patch(`${this.booksUrl}/${id}`, body, this.httpOptions)
      .pipe(catchError(this.handleError('Soft delete', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation, error.message);
      return of(result as T);
    };
  }
}
