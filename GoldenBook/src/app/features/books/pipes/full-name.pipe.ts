import { Pipe, PipeTransform } from '@angular/core';
import { Author } from 'src/app/models/interfaces/book.interface';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: Author): string {
    return `${value.firstName} ${value.lastName}`;
  }
}
