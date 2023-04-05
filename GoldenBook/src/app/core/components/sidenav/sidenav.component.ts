import { Subject, takeUntil } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/books/services/categories.service';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() isVisible!: boolean;

  categories: Categories[] = [];

  unsubscribe$: Subject<void> = new Subject();

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Categories[]) => (this.categories = data));
  }

  unsubscribeAll() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }
}
