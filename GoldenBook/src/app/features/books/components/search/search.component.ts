import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() displayTerm = new EventEmitter<string>();

  private term: string = '';

  constructor() {}

  onClick(): void {
    this.displayTerm.emit(this.term);
  }

  searchTerm(event: Event): void {
    this.term = (event.target as HTMLInputElement).value;
  }
}
