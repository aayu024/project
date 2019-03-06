import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MustMatch } from '../validators/matchPasswordValidator';

import { FetchDataService } from '../fetch-data.service';
import { switchMap, map } from 'rxjs/operators';
import { PopoverController, AlertController, ActionSheetController } from '@ionic/angular';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private fetchDataService: FetchDataService,
    private popOverController: PopoverController, private alertController: AlertController, private actionSheetController: ActionSheetController,
    private router: Router,private file:File) { }
  registerForm: FormGroup;
  submitted = false;
  validation_msg: any;
  data: any;

  ngOnInit() {
    this.fetchDataService.getData().subscribe(data => {
      console.log("data", data)
    })
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z\\s]+")]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z\\s]+")]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      password: ['', [Validators.required, Validators.pattern("[a-z0-9A-Z!@#$%&*()]{8,100}")]],
      cpassword: ['', [Validators.required]],
    }, {
        validator: MustMatch('password', 'cpassword')
      })

    this.validation_msg = {
      'name': [
        { type: 'required', message: 'First name is required' },
        { type: 'pattern', message: 'First name should contain only alphabets' }
      ],
      'lastname': [
        { type: 'required', message: 'Last name is required' },
        { type: 'pattern', message: 'Last name should contain only alphabets' }
      ],
      'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter valid email address' }
      ],
      'password': [
        { type: 'required', message: 'Password is required' },
        { type: 'pattern', message: 'Password must contain lower case, upper case alphabet, digit and special character' },
        { type: 'minLength', message: 'Password must be of length 6 characters' }
      ],
      'cpassword': [
        { type: 'required', message: 'Password is required' }

      ]
    }

    //console.log('validatorc',this.registerForm.get('cpassword').hasError("MustMatch('password','cpassword'))"))
  }

  registerData($event){
    this.presentPopover();
    //console.log("registerForm.get('cpassword').MustMatch",this.registerForm.getError('cpassword'))
    this.data = JSON.stringify(this.registerForm.value)
  //   module.controller('MyCtrl', function ($scope, $cordovaFile) {

  //     document.addEventListener('deviceready', function () {
  //       $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "details.json", this.data).then(function (success) {
  //         console.log("done");
  //       }, function (error) {
  //         console.log("error")
  //       });
      
  //   });

  // });

    var data = JSON.stringify(data);
    
   $cordova.writeFile('details.json',JSON.stringify(data),{append:true})
      .then(function (success) {
        console.log("success the file has been created")
      }, function (error) {
        console.log("error"+JSON.stringify(error))
      });
 
  

}


  async presentPopover() {
    // const popover = await this.popOverController.create({
    //   component: PopOverComponent,
    //   // componentProps:{
    //   //   count:this.letterOfCredit.getTransactions().length,
    //   //   stage:this.letterOfCredit.getTransactions()
    //   // },
    //   event: ev,
    //   translucent: true,
    //   cssClass: 'custom-popover',
    // });
    // return await popover.present();
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'client registered successfully',
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.router.navigate(['login']);
        }
      }]

    });
    await alert.present();
  }


}
