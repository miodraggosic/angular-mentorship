import { AuthGuard } from './core/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { HomepageLayoutComponent } from './core/layouts/homepage-layout/homepage-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'homepage',
    component: HomepageLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./features/books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./features/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
