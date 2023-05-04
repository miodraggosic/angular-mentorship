import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, shareReplay, map } from 'rxjs';
import { environment } from '@env';

import { Country } from './../../core/auth/interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly countriesUrl: string = `${environment.baseApiUrl}countries`;

  private countries$!: Observable<Country[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    if (!this.countries$) {
      this.countries$ = this.http
        .get<Country[]>(this.countriesUrl)
        .pipe(shareReplay());
    }
    return this.countries$.pipe(map((categories) => categories));
  }
}
