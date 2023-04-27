import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text: string = 'Golden Book.';

  private visible: boolean = false;

  constructor(
    private sidenavService: SidenavService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.visible = !this.visible;
    this.sidenavService.toggleSidenav$.next(this.visible);
  }

  logout() {
    this.authService.logout();
  }
}
