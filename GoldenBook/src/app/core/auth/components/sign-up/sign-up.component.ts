import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CountriesService } from '@shared/services/countries.service';
import { take } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { ControlsOf, SignUp } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userForm!: FormGroup;

  countries!: Country[];

  registered: boolean = false;

  constructor(
    private countryService: CountriesService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
  }

  onSubmit() {
    const user: SignUp = this.userForm.value;
    this.auth
      .signUp(user)
      .pipe(take(1))
      .subscribe(() => {
        this.userForm.reset();
        this.registered = true;
      });
  }

  get firstName() {
    return this.userForm.get('firstName')!;
  }
  get lastName() {
    return this.userForm.get('lastName')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get newPassword() {
    return this.userForm.controls['password'].get('newPassword')!;
  }
  get confirmPassword() {
    return this.userForm.controls['password']!;
  }
  get country() {
    return this.userForm.get('country')!;
  }

  private getCountries() {
    this.countryService
      .getAll()
      .pipe(take(1))
      .subscribe((data: Country[]) => {
        this.countries = data;
      });
  }

  private createForm(): void {
    this.userForm = new FormGroup<ControlsOf<SignUp>>({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z]+/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z]+/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup(
        {
          newPassword: new FormControl('', [
            Validators.required,
            Validators.pattern(/^\S+$/),
          ]),
          confirmPassword: new FormControl('', Validators.required),
        },
        { validators: this.checkPassword() }
      ),
      role: new FormControl('user'),
      country: new FormControl('', Validators.required),
    });
  }

  private checkPassword() {
    return (control: AbstractControl): ValidationErrors | null => {
      const getNewPassword = control.get('newPassword');
      const getConfirmPassword = control.get('confirmPassword');

      const isSame =
        getNewPassword?.value === getConfirmPassword?.value ? true : false;

      return isSame ? null : { notSame: true };
    };
  }
}
