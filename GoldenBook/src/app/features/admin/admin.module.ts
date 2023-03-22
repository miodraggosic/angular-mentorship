import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminBooksComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminModule {}
