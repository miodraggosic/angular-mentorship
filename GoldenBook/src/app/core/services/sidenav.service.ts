import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  toggleSidenav$: Subject<boolean> = new Subject<boolean>();

  constructor() {}
}
