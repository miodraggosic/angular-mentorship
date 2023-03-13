import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ButtonComponent, PaginationComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [ButtonComponent, PaginationComponent],
})
export class SharedModule {}
