import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

const COMPONENTS = [
  ButtonComponent,
  PaginationComponent,
  TitleComponent,
  ConfirmDialogComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, MatPaginatorModule, MatDialogModule, MatButtonModule],
  exports: COMPONENTS,
})
export class SharedModule {}
