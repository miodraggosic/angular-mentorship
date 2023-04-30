import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, map } from 'rxjs';

import { StoreFiltersService } from '../../services/store-filters.service';
import { BooksComponent } from '../../components/books/books.component';
import { ConfirmDialogComponent } from './../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SaveFiltersGuard implements CanDeactivate<BooksComponent> {
  constructor(
    private matDialog: MatDialog,
    private filterService: StoreFiltersService
  ) {}

  canDeactivate(component: BooksComponent): Observable<boolean> {
    const modal = this.matDialog.open(ConfirmDialogComponent, {
      data: 'Do you want to save filters?',
    });
    const saveFilters$ = modal.afterClosed().pipe<boolean>(
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

    return saveFilters$;
  }
}
