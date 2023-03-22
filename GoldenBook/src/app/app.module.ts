import { BooksModule } from './features/books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './features/admin/admin-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, SharedModule, BooksModule, BrowserAnimationsModule, AppRoutingModule, AdminRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
