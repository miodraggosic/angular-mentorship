import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Category } from 'src/app/models/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly categoriesUrl: string = `${environment.baseApiUrl}categories`;

  private categories$!: Observable<Category[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    if (!this.categories$) {
      this.categories$ = this.http
        .get<Category[]>(this.categoriesUrl)
        .pipe(shareReplay());
    }
    return this.categories$.pipe(
      map((categories) => categories.map((category) => category.name))
    );
  }
}
