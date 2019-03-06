import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authGuard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private authGuardService:AuthGuardService) { }

  ngOnInit() {}
  logout()
  {
    this.authGuardService.logout()
  }
}
