import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/authGuard.service';
import { FetchDataService } from '../fetch-data.service';
import { Subscription } from 'rxjs';
import { Customer } from '../shared/Customer';
import { SessionGuardService } from '../services/session-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  credentials_user: string[] = [];
  credentials_password: string[] = [];
  password: string;
  visible = false;
  values: Customer[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private authGuardService: AuthGuardService,
    private fetchDataService: FetchDataService,private sessionGuardService:SessionGuardService) { }
  public subscription: Subscription
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      upass: ['', Validators.required]
     
    })
    this.subscription = this.fetchDataService.getData().subscribe(data => {
      for(let i=0;i<data.length;i++){
        this.values.push(new Customer(data[i]))
      }
      console.log("val",this.values)
      // for (let i = 0; i < this.values.length; i++) {
      //   this.credentials_user.push(this.values[i]["firstname"])
      //   this.credentials_password.push(this.values[i]["password"])
      // }
    });
    
  }
  login() {
    
    console.log("called", this.credentials_user, this.credentials_password)
    for (let i = 0; i < this.values.length; i++) {
      if (this.loginForm.value["uname"] == this.values[i].getFirstName() && this.loginForm.value["upass"] == this.values[i].getPassword()) {
        this.sessionGuardService.storeUser(this.values[i])
        this.authGuardService.login(this.loginForm.value["uname"]);
        this.visible=false;
      }
      else {
        this.visible = true;
      }
    }
    

  }
  registration() {
    this.router.navigate(['registration-form'])
  }
  ngOnDestroy() {
    console.log("Destroyed")
    this.subscription.unsubscribe();
  }

}
