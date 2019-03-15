import { Injectable } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class FetchGuardService {

  constructor(private fetchDataService:FetchDataService) { }
  getCustomer()
  {
    return this.fetchDataService.getData();
  }
}
