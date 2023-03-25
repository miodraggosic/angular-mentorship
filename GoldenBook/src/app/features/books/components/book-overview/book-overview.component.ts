import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/interfaces/book.interface';
import { books } from 'src/app/models/mock-books';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss'],
})
export class BookOverviewComponent implements OnInit {
  private books: Book[] = books;
  book!: Book;

  constructor(private ActiveteRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.book = this.getBookId();
  }

  getBookId(): Book {
    const bookId = Number(this.ActiveteRouter.snapshot.paramMap.get('id'));
    console.log(bookId);
    const bookToRender: Book[] = this.books.filter(
      (book) => book.id === bookId
    );
    return bookToRender[0];
  }
}
