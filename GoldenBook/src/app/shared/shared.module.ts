import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    CardComponent,
    BookComponent,
    SearchComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
