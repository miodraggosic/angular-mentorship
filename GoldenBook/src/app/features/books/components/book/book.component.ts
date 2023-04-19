import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<void>();
  @Output() softDelete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

  onSoftDelete() {
    this.softDelete.emit();
  }
}
