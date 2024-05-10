import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ManagementPortalComponent } from './management-portal.component';
import { LogInFormComponent } from './management-components/log-in-form/log-in-form.component';
import { SignUpFormComponent } from './management-components/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    ManagementPortalComponent,
    LogInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule
  ]
})
export class ManagementPortalModule { }
