import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text: string = 'Golden Book.';

  @Output() handler = new EventEmitter<boolean>();

  private toggleSidenav: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toggleSidenav = !this.toggleSidenav;

    this.handler.emit(this.toggleSidenav);
  }
}
