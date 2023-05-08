import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { BookOverviewComponent } from './components/book-overview/book-overview.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';

import { BookBackgroundDirective } from './directives/book-background.directive';
import { FullNamePipe } from './pipes/full-name.pipe';
@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    BookOverviewComponent,
    BookBackgroundDirective,
    FullNamePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BooksRoutingModule,
    MatDialogModule,
  ],
  exports: [],
})
export class BooksModule {}
