import { StoreFiltersService } from '../../../features/books/services/store-filters.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() displayTerm = new EventEmitter<string>();

  defaultValue?: string = '';

  private term: string = '';

  constructor(private filterService: StoreFiltersService) {
    this.getSavedValue();
  }

  onClick(): void {
    this.displayTerm.emit(this.term);
  }

  getSavedValue() {
    const saved = this.filterService.getFilters();
    if (saved) {
      this.defaultValue = saved.searchValue;
    }
  }

  searchTerm(event: Event): void {
    this.term = (event.target as HTMLInputElement).value;
  }
}
