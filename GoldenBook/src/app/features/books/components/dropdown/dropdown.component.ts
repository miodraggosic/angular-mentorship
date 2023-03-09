import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Output() displayCategory = new EventEmitter<string>();

  categoryValue: string = '';

  categoriesFilter: Categories[] = [
    Categories.general,
    Categories.fantasy,
    Categories.history,
    Categories.sciense,
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedCategory(event: any): void {
    this.categoryValue = event.target.value;
    this.displayCategory.emit(this.categoryValue);
  }
}
