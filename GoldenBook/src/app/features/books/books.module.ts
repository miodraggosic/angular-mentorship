import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BookOverviewComponent } from './components/book-overview/book-overview.component';

import { BookBackgroundDirective } from './directives/book-background.directive';
import { SaveFiltersDialogComponent } from './components/save-filters-dialog/save-filters-dialog.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    SearchComponent,
    DropdownComponent,
    BookOverviewComponent,
    BookBackgroundDirective,
    SaveFiltersDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    BooksRoutingModule,
    MatDialogModule,
  ],
  exports: [],
})
export class BooksModule {}
