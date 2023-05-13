import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appFieldBorder]',
})
export class FieldBorderDirective implements AfterViewInit {
  @Input() value!: string;

  constructor(private elementRef: ElementRef) {}

  @HostListener('keyup', ['$event']) onKeyup(event: KeyboardEvent): void {
    this.value = (event.target as HTMLInputElement).value;

    this.setBorderColor(this.value);
  }

  ngAfterViewInit(): void {
    this.setBorderColor(this.value);
  }

  private setBorderColor(value: string) {
    const elem = this.elementRef.nativeElement as HTMLInputElement;

    if (value.trim() === '') {
      // elem.classList.add('red');
      elem.style.border = '2px solid red';
      return;
    }
    elem.style.border = '2px solid green';

    // elem.classList.replace('red', 'green');
  }
}
