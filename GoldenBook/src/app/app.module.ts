import { BooksModule } from './features/books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BooksComponent } from './features/books/components/books/books.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, SharedModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
