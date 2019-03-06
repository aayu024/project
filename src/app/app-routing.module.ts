import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/authGuard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registration-form', loadChildren: './registration-form/registration-form.module#RegistrationFormPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {path:'dashboard',canActivate: [AuthGuardService],component:DashboardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
