import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';

import { FullNamePipe } from './pipes/full-name.pipe';
import { TextLengthPipe } from './pipes/text-length.pipe';

const COMPONENTS = [
  ButtonComponent,
  PaginationComponent,
  TitleComponent,
  ConfirmDialogComponent,
  DropdownComponent,
  SearchComponent,
  FullNamePipe,
  TextLengthPipe,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
