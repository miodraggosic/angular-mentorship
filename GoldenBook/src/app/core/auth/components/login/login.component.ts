import { Login } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: Login = {
    email: '',
    password: '',
  };

  registered: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth
      .login(this.loginForm)
      .pipe(take(1))
      .subscribe((data) => {
        if (!data) {
          this.registered = true;
        }
      });
  }
}
