import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [ButtonComponent, PaginationComponent, TitleComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [ButtonComponent, PaginationComponent, TitleComponent],
})
export class SharedModule {}
