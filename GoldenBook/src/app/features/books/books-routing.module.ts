import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookOverviewComponent } from './components/book-overview/book-overview.component';
import { SaveFiltersGuard } from './guards/save-filters/save-filters.guard';
import { ConfirmDeactivateGuard } from '@shared/guards/confirm-deactivate/confirm-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canDeactivate: [SaveFiltersGuard],
  },
  {
    path: 'book/:id',
    component: BookOverviewComponent,
    canDeactivate: [ConfirmDeactivateGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
