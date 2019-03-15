import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../shared/Customer';
import { SessionGuardService } from '../../services/session-guard.service';
import { FetchDataService } from '../../fetch-data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  visible=false
  constructor(private fetchDataService:FetchDataService,private sessionGuardService:SessionGuardService) { }
  customer:Customer;
  @Input() userId;
  ngOnInit() {
    this.visible=true
    console.log('username',this.userId)
    this.sessionGuardService.loadUser().then(resultCustomer=>{
      this.customer=new Customer(resultCustomer)
    })
  }

}
