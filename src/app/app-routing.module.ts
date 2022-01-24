import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Test1Component } from './layout/test1/test1.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'test1', component: Test1Component},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
