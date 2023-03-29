import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';

const COMPONENTS = [ButtonComponent, PaginationComponent, TitleComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, MatPaginatorModule],
  exports: COMPONENTS,
})
export class SharedModule {}
