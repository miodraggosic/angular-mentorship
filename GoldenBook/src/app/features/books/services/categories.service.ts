import { Categories } from 'src/app/models/enums/categories.enum';
import { categories } from './../../../models/mock-categories';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Categories[] = categories;

  constructor() {}

  getAll(): Observable<Categories[]> {
    return of(this.categories);
  }
}
