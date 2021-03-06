import { Injectable } from '@angular/core';
import { SessionService } from '../providers/session.service';


@Injectable({
  providedIn: 'root'
})


export class SessionGuardService {

  constructor(private sessionService: SessionService) { }

  public invalidateSession() {
    this.sessionService.invalidateSession();
  }
  public loadUser() {
    return this.sessionService.loadUser();
  }
  public storeUser(customer) {
    return this.sessionService.storeUser(customer);
  }

}
