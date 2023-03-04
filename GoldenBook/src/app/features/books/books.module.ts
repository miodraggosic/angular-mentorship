import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
