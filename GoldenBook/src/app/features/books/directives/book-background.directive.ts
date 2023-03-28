import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/enums/categories.enum';

@Directive({
  selector: '[appBookBackground]',
})
export class BookBackgroundDirective implements OnInit {
  @Input() category?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    switch (this.category) {
      case Categories.history:
        this.elementRef.nativeElement.style.backgroundColor = 'white';
        break;
      case Categories.fantasy:
        this.elementRef.nativeElement.style.backgroundColor = 'pink';
        this.elementRef.nativeElement.style.color = 'white';
        break;
      case Categories.sciense:
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'yellow';
        break;
    }
  }
}
