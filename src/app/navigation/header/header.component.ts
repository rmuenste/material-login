import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();

  isAuth: boolean = false;

  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onToggle(): void {
    this.sidenavToggle.emit();
  }

  onLogout(): void {
    this.authService.logout().subscribe({
      next: () => {
        console.log( `User logged out`);
      },
      error: (e) => console.log(e),
      complete: () => {
        console.log("Logout complete");
      }
    });
  }
}
