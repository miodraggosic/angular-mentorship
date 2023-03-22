import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GoldenBook';

  toggleValue!: boolean;

  toggleValueChange(event: boolean): void {
    this.toggleValue = event;
  }
}
