import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/books',
    component: AdminBooksComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
