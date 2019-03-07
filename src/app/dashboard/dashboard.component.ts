import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authGuard.service';
import { AuthenticationService } from '../providers/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private authGuardService:AuthGuardService) { }
  visibleData=false;
  user:string;
  ngOnInit() {
    this.authGuardService.getToken().then(userName=>{
      this.user=userName;
    })
  }
  logout()
  {
    this.authGuardService.logout()
  }
  getDetails()
  {
    this.visibleData=true;
  }
}
