import { StoreFiltersService } from './../../services/store-filters.service';
import { take } from 'rxjs';
import { CategoriesService } from '@shared/services/categories.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Output() selected = new EventEmitter<string[]>();
  categories: Categories[] = [];
  defaultSelection?: string[] | null;

  constructor(
    private categoriesService: CategoriesService,
    private filterService: StoreFiltersService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getSelected();
  }

  onChange(selected: string[]) {
    this.selected?.emit(selected);
  }

  getSelected(): void {
    const saved = this.filterService.getFilters();
    this.defaultSelection = saved?.categoriesSelected;
  }

  private getCategories(): void {
    this.categoriesService
      .getAll()
      .pipe(take(1))
      .subscribe((data: Categories[]) => (this.categories = data));
  }
}
