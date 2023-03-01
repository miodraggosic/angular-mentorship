import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BookComponent } from './components/book/book.component';



@NgModule({
  declarations: [
    CardComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
