import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  tokenState = new BehaviorSubject<string>(null);

  public CUSTOMER_KEY = "customer";

  constructor(private storage: Storage) {

  }
  storeUser(customer) {
    return this.storage.set(this.CUSTOMER_KEY, customer);
  }
  loadUser() {
    return this.storage.get(this.CUSTOMER_KEY);
  }
  invalidateSession() {
    this.storage.remove(this.CUSTOMER_KEY);
  }
}
