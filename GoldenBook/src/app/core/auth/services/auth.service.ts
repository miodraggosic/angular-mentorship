import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { Observable, map } from 'rxjs';
import { Login, SignUp, User } from './../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'logged_user';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: Login): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`
      )
      .pipe(
        map((res: User[]) => {
          if (!!res.length) {
            this.storeUser(res);
            this.router.navigateByUrl('homepage');
            return true;
          }
          return false;
        })
      );
  }

  signUp(user: SignUp) {
    const registerUser: User = this.registerUser(user);
    return this.httpClient
      .post<User>(`${environment.baseApiUrl}users`, registerUser)
      .pipe(
        map((res) => {
          if (res) {
            setTimeout(() => this.router.navigateByUrl('login'), 1200);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('login');
  }

  isAuthentificated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem(this.storageKey)!);

    if (user.role === 'admin') {
      return true;
    }
    return false;
  }

  private storeUser(arr: User[]): void {
    const user = arr.map((user: User) => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };
    })[0];
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  private registerUser(user: SignUp): User {
    const userToRegister: User = {
      firstName: user.firstName!,
      lastName: user.lastName!,
      countryId: Number(user.country)!,
      createdAt: new Date().toISOString(),
      email: user.email!,
      password: user.password.newPassword!,
      role: user.role!,
    };
    return userToRegister;
  }
}
