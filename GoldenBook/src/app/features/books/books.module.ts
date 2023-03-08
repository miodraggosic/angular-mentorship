import { SharedModule } from './../../shared/shared.module';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [BooksComponent],
})
export class BooksModule {}
