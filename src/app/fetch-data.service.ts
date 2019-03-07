import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './shared/Customer';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get<Customer[]>('/assets/data/details.json');
  }
}
