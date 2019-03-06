import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/authGuard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private authGuardService: AuthGuardService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }
  login(name: string) {
    console.log("called", this.username, this.password, name)
    // console.log("user",this.loginForm.controls['user'])
    if (name == "admin" && this.password == "admin") {
      this.authGuardService.login(name);
    }
  }
  registration() {
    this.router.navigate(['registration-form'])
  }

}
