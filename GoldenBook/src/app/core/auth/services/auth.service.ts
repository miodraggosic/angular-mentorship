import { Login, User } from './../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'logged_user';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: Login) {
    return this.httpClient
      .get<User[]>(
        `${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`
      )
      .pipe(
        map((res: User[]) => {
          if (res.length > 0) {
            this.storeUser(res);
            this.router.navigateByUrl('homepage');
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('login');
  }

  isAuthentificated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  private storeUser(arr: User[]) {
    const user = arr.map((user: User) => {
      return {
        email: user.email,
        password: user.password,
        role: user.role,
      };
    });
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }
}
