import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authGuard.service';
import { AuthenticationService } from '../providers/authentication.service';
import { SessionGuardService } from '../services/session-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private authGuardService:AuthGuardService,private sessionGuardService:SessionGuardService,
  private router:Router) { }
  visibleData=false;
  user:string;
  ngOnInit() {
    this.authGuardService.getToken().then(userName=>{
      this.user=userName;
    })
  }
  logout()
  {
    this.authGuardService.logout();
    this.sessionGuardService.invalidateSession();
  }
  getDetails()
  {
    this.router.navigate(['dashboard', 'details']);
    //this.visibleData=true;
  }
  clickMe(){
    this.router.navigate(['dashboard', 'view']);
  }
}
