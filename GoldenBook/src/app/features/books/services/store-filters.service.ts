import { Injectable } from '@angular/core';
import { FilterValues } from 'src/app/models/interfaces/filterValues.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreFiltersService {
  setFilters(data: FilterValues): void {
    const filterValues = JSON.stringify(data);
    localStorage.setItem('filterValues', filterValues);
  }

  getFilters(): FilterValues | null {
    const filters = localStorage.getItem('filterValues');
    if (filters) {
      return JSON.parse(filters);
    }
    return null;
  }
}
