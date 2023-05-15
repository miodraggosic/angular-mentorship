import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '@shared/services/countries.service';
import { take } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import {
  ControlsOf,
  SignUp,
  checkPassword,
} from '../../interfaces/user.interface';
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

  private nameValidators = [Validators.required, Validators.pattern(/^[A-Z]+/)];
  private passwordValidators = [
    Validators.required,
    Validators.pattern(/^\S+$/),
  ];

  private createForm(): void {
    this.userForm = new FormGroup<ControlsOf<SignUp>>({
      firstName: new FormControl('', this.nameValidators),
      lastName: new FormControl('', this.nameValidators),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup(
        {
          newPassword: new FormControl('', this.passwordValidators),
          confirmPassword: new FormControl('', this.passwordValidators),
        },
        { validators: checkPassword() }
      ),
      role: new FormControl('user'),
      country: new FormControl('', Validators.required),
    });
  }
}
