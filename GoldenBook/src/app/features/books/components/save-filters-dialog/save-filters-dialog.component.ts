import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-filters-dialog',
  templateUrl: './save-filters-dialog.component.html',
  styleUrls: ['./save-filters-dialog.component.scss'],
})
export class SaveFiltersDialogComponent {
  constructor(private dialogRef: MatDialogRef<SaveFiltersDialogComponent>) {}

  closeYes() {
    this.dialogRef.close(true);
  }

  closeNo() {
    this.dialogRef.close(false);
  }
}
