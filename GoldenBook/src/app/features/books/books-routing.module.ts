import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookOverviewComponent } from './components/book-overview/book-overview.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'book/:id',
    component: BookOverviewComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
