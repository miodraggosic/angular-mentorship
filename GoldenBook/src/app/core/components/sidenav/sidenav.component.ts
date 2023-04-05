import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/books/services/categories.service';
import { Categories } from 'src/app/models/enums/categories.enum';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isVisible: boolean = false;

  categories: Categories[] = [];

  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private categoriesService: CategoriesService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.toggleVisible();
  }

  getCategories(): void {
    this.categoriesService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Categories[]) => (this.categories = data));
  }

  toggleVisible(): void {
    this.sidenavService.toggleSidenav$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => (this.isVisible = value));
  }

  unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
}
