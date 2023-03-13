import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  length: number = 104;
  pageSizeOptions: number[] = [6, 12, 24];

  constructor() {}

  ngOnInit(): void {}
}
