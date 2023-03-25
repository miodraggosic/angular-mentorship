import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from 'src/app/models/mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  displayValue: string = '';

  books: Book[] = books;

  constructor() {}

  ngOnInit(): void {}

  showValue(event: string) {
    this.displayValue = event;
  }
}
