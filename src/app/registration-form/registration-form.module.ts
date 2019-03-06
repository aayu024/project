import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationFormPage } from './registration-form.page';
import { PopOverComponent } from '../pop-over/pop-over.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationFormPage]
})
export class RegistrationFormPageModule {}
