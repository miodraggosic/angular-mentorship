import { Categories } from 'src/app/models/enums/categories.enum';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categories } from '@mocks/mock-categories';

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
