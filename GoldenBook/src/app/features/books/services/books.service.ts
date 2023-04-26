import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, catchError, map, of, pipe, retry } from 'rxjs';
import { Book } from 'src/app/models/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly booksUrl: string = `${environment.baseApiUrl}books`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      PageName: 'BookOverview',
    }),
  };

  constructor(private httpClientService: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.httpClientService
      .get<Book[]>(`${this.booksUrl}`)
      .pipe(
        this.getBookYear(),
        retry(2),
        catchError(this.handleError('Get books', []))
      );
  }

  getFiltered(): Observable<Book[]> {
    return this.httpClientService.get<Book[]>(`${this.booksUrl}`).pipe(
      map((data) => data.filter((books) => books.deletedAt === null)),
      this.getBookYear(),
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
    return this.httpClientService
      .get<Book>(`${this.booksUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Book>('Get Book')));
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
      console.error(operation, error.message);
      return of(result as T);
    };
  }

  private getBookYear() {
    return pipe(
      map((books: Book[]) => {
        return books.map((book: Book) => {
          book.year = new Date(book.year).getFullYear().toString();
          return book;
        });
      })
    );
  }
}
