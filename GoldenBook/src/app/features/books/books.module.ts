import { SharedModule } from './../../shared/shared.module';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { TitleComponent } from './components/title/title.component';
@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    SearchComponent,
    DropdownComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
