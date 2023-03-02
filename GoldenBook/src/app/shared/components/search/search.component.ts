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
    console.log(this.term);

    this.displayTerm.emit(this.term);
  }

  searchTerm(event: any): void {
    this.term = event.target.value;
  }
}
