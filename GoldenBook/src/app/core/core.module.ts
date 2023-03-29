import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
  PageNotFoundComponent,
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
  ],
  exports: COMPONENTS,
})
export class CoreModule {}
