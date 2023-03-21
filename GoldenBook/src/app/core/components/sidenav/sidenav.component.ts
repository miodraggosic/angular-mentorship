import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  categories: Categories[] = [
    Categories.general,
    Categories.fantasy,
    Categories.history,
    Categories.sciense,
  ];

  constructor() {}

  ngOnInit(): void {}
}
