import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text: string = 'Golden Book.';

  private visible: boolean = false;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  onClick(): void {
    this.visible = !this.visible;
    this.sidenavService.toggleSidenav$.next(this.visible);
  }
}
