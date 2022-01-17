import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-project';
  openSidenav=false;

  onToggle(): void {
    this.openSidenav = !this.openSidenav;
  }
}
