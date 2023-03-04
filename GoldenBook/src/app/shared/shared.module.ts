import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [SearchComponent, DropdownComponent],
  imports: [CommonModule],
  exports: [SearchComponent, DropdownComponent],
})
export class SharedModule {}
