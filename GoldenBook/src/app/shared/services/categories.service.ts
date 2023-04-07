import { Categories } from 'src/app/models/enums/categories.enum';
import { categories } from 'src/app/mocks/mock-categories';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: Categories[] = categories;

  constructor() {}

  getAll(): Observable<Categories[]> {
    return of(this.categories);
  }
}
