import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationFormPage } from './registration-form.page';
var routes = [
    {
        path: '',
        component: RegistrationFormPage
    }
];
var RegistrationFormPageModule = /** @class */ (function () {
    function RegistrationFormPageModule() {
    }
    RegistrationFormPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RegistrationFormPage]
        })
    ], RegistrationFormPageModule);
    return RegistrationFormPageModule;
}());
export { RegistrationFormPageModule };
//# sourceMappingURL=registration-form.module.js.map