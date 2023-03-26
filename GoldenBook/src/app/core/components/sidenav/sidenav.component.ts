import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() isVisible!: boolean;

  categories: Categories[] = [
    Categories.general,
    Categories.fantasy,
    Categories.history,
    Categories.sciense,
  ];

  constructor() {}

  ngOnInit(): void {}
}
