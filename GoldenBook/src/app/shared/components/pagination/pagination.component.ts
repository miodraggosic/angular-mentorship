import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements AfterViewInit {
  @ViewChild('pagination') paginator!: MatPaginator;

  @Input() length?: number;
  @Input() pageSizeOptions!: number[];

  constructor() {}

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Rows per page:';
  }
}
