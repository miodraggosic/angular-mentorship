import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookOverviewComponent } from './components/book-overview/book-overview.component';
import { SaveFiltersGuard } from './guards/save-filters.guard';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canDeactivate: [SaveFiltersGuard],
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
  providers: [SaveFiltersGuard],
})
export class BooksRoutingModule {}
