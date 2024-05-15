import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminPortalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule
  ]
})
export class AdminPortalModule { }
