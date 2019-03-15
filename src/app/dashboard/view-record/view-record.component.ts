import { Component, OnInit } from '@angular/core';
import { FetchGuardService } from '../../services/fetch-guard.service';
import { Customer } from '../../shared/Customer';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss'],
})
export class ViewRecordComponent implements OnInit {

  constructor(private fetchGuardService:FetchGuardService) { }
  values: Customer[] = [];
  ngOnInit() {
    this.fetchGuardService.getCustomer().subscribe(data=>{
      for(let i=0;i<data.length;i++){
        this.values.push(new Customer(data[i]))
      }
    })
  }

}
