import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    CardComponent,
    BookComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
