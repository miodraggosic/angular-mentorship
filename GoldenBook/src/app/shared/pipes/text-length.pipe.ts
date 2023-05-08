import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength',
})
export class TextLengthPipe implements PipeTransform {
  transform(value: string, length: number = 100): string {
    return value.slice(0, length);
  }
}
