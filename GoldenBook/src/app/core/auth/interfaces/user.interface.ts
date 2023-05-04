import { FormControl, FormGroup } from '@angular/forms';

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
  password: string;
  role: string;
  id?: number;
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
