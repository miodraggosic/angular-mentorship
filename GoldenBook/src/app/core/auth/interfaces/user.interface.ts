import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  password: {
    newPassword: string | null;
    confirmPassword: string | null;
  };
  role: string | null;
  id?: number;
}
export interface User {
  email: string;
  firstName: string;
  lastName: string;
  countryId: number;
  createdAt: string;
  password: string;
  role: string;
  id?: number;
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

export function checkPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const getNewPassword = control.get('newPassword');
    const getConfirmPassword = control.get('confirmPassword');
    console.log(control);

    const isSame =
      getNewPassword?.value === getConfirmPassword?.value ? true : false;

    return isSame ? null : { notSame: true };
  };
}
