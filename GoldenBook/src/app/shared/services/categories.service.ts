import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Category } from 'src/app/models/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // private categories: Categories[] = categories;
  private categoriesUrl: string = `${environment.baseApiUrl}categories`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get<Category[]>(this.categoriesUrl)
      .pipe(map((categories) => categories.map((category) => category.name)));
  }
}
