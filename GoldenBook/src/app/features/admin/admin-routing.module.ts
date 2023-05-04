import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/auth/guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: AdminBooksComponent,
    canActivate: [AdminGuard],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
