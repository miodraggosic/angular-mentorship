import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BooksComponent } from '../../components/books/books.component';
import { MatDialog } from '@angular/material/dialog';
import { SaveFiltersDialogComponent } from '../../components/save-filters-dialog/save-filters-dialog.component';
import { StoreFiltersService } from '../../services/store-filters.service';

@Injectable({
  providedIn: 'root',
})
export class SaveFiltersGuard implements CanDeactivate<BooksComponent> {
  constructor(
    private matDialog: MatDialog,
    private filterService: StoreFiltersService
  ) {}

  canDeactivate(component: BooksComponent): Observable<boolean> {
    const modal = this.matDialog.open(SaveFiltersDialogComponent);
    const $saveFilters = modal.afterClosed().pipe<boolean>(
      map((shouldSave: boolean) => {
        if (shouldSave) {
          const filters = {
            searchValue: component.displayValue,
            categoriesSelected: component.selectedCategories,
          };
          this.filterService.setFilters(filters);
        }

        return true;
      })
    );

    return $saveFilters;
  }
}
