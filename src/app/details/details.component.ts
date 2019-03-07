import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Subscription } from 'rxjs';
import { SessionGuardService } from '../services/session-guard.service';
import { Customer } from '../shared/Customer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(private fetchDataService:FetchDataService,private sessionGuardService:SessionGuardService) { }
  customer:Customer;
  @Input() userId;
  ngOnInit() {
    console.log('username',this.userId)
    this.sessionGuardService.loadUser().then(resultCustomer=>{
      this.customer=new Customer(resultCustomer)
    })
  }

}
