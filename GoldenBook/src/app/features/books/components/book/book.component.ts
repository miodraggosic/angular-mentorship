import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter();
  @Output() softDelete = new EventEmitter();

  onDelete(): void {
    this.delete.emit();
  }

  onSoftDelete() {
    this.softDelete.emit();
  }
}
