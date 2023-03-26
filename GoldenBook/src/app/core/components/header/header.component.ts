import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text: string = 'Golden Book.';

  @Output() toggleSidenav = new EventEmitter<boolean>();

  private visible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.visible = !this.visible;

    this.toggleSidenav.emit(this.visible);
  }
}
