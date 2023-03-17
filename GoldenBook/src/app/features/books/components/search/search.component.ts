import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() displayTerm = new EventEmitter<string>();

  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.displayTerm.emit(this.term);
  }

  searchTerm(event: Event): void {
    this.term = (event.target as HTMLInputElement).value;
  }
}
