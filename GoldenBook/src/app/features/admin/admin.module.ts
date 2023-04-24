import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdminBooksComponent, TableComponent, ReadMoreComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [],
})
export class AdminModule {}
