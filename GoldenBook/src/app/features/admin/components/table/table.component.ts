import { ReadMoreComponent } from './../read-more/read-more.component';
import { BooksService } from './../../../books/services/books.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/interfaces/book.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  books: Book[] = [];

  columns = [
    {
      columnDef: 'image',
      header: 'Image',
      cell: (book: Book) => `${book.imageUrl}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (book: Book) => `${book.title}`,
    },
    {
      columnDef: 'author',
      header: 'Author',
      cell: (book: Book) => `${book.author}`,
    },
    {
      columnDef: 'year',
      header: 'Year',
      cell: (book: Book) => `${book.year}`,
    },
    {
      columnDef: 'category',
      header: 'Category',
      cell: (book: Book) => `${book.category}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (book: Book) => `${book.description}`,
    },
    {
      columnDef: 'isbn',
      header: 'ISBN',
      cell: (book: Book) => `${book.isbn}`,
    },
    {
      columnDef: 'reviewer',
      header: 'Reviewer/Review',
      cell: (book: Book) => `${book.reviewer}`,
    },
    {
      columnDef: 'overview',
      header: 'Go to Book Overview',
      cell: (book: Book) => `${book.id}`,
    },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor(
    private readMore: MatDialog,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  openReadMore(text: string) {
    this.readMore
      .open(ReadMoreComponent, { data: text, width: '50%' })
      .afterClosed()
      .subscribe((res) => console.log(res));
  }

  private getAllBooks() {
    this.booksService.getAll().subscribe((books) => (this.books = books));
  }
}
