import { Subject, takeUntil } from 'rxjs';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  categories: Categories[] = [];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  private getCategories(): void {
    this.categoriesService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Categories[]) => (this.categories = data));
  }

  private unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
