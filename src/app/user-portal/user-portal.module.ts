import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPortalRoutingModule } from './user-portal-routing.module';
import { UserPortalComponent } from './user-portal.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    UserPortalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserPortalRoutingModule
  ]
})
export class UserPortalModule { }
