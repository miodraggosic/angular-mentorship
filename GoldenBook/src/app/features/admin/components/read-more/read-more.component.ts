import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public description: string,
    private dialogRef: MatDialogRef<ReadMoreComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close('Dialog closed');
  }
}
