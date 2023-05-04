import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@shared/services/categories.service';
import { SidenavService } from '../../services/sidenav.service';
import { Category } from 'src/app/models/interfaces/category.interface';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isVisible: boolean = false;
  showAdminLinks: boolean = false;
  categories: Category[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private categoriesService: CategoriesService,
    private sidenavService: SidenavService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.toggleVisible();
    this.showAdminLinks = this.auth.isAdmin();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  private getCategories(): void {
    this.categoriesService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

  private toggleVisible(): void {
    this.sidenavService.toggleSidenav$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => (this.isVisible = value));
  }

  private unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
