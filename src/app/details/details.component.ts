import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(private fetchDataService:FetchDataService) { }
  values: string[] = [];
  @Input() userId;
  ngOnInit() {
    console.log('username',this.userId)
    this.fetchDataService.getData().subscribe(resultData=>{
      
      console.log('result',this.values)
    })
  }

}
