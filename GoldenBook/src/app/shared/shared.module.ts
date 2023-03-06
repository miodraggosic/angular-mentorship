import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    SearchComponent,
    DropdownComponent,
    ButtonComponent,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [
    SearchComponent,
    DropdownComponent,
    ButtonComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
