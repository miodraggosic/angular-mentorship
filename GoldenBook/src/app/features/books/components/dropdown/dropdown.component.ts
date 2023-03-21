import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  categoriesFilter: Categories[] = [
    Categories.general,
    Categories.fantasy,
    Categories.history,
    Categories.sciense,
  ];

  constructor() {}

  ngOnInit(): void {}
}
