import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SearchComponent, DropdownComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [SearchComponent, DropdownComponent, ButtonComponent],
})
export class SharedModule {}
