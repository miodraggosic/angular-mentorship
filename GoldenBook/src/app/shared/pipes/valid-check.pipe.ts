import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'validCheck',
})
export class ValidCheckPipe implements PipeTransform {
  transform(value: AbstractControl): boolean {
    return (value.dirty || value.touched) && value.invalid ? false : true;
  }
}
