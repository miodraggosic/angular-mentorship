import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { BookOverviewComponent } from '../../../features/books/components/book-overview/book-overview.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard
  implements CanDeactivate<BookOverviewComponent>
{
  constructor(private matDialog: MatDialog) {}

  canDeactivate(): Observable<boolean> {
    const modal = this.matDialog.open(ConfirmDialogComponent, {
      data: 'Are you sure that you want to leave page?',
    });
    const confirm$ = modal
      .afterClosed()
      .pipe<boolean>(tap((res: boolean) => res));

    return confirm$;
  }
}
