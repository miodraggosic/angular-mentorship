import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
  PageNotFoundComponent,
  LoginComponent,
  HomepageLayoutComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: COMPONENTS,
})
export class CoreModule {}
