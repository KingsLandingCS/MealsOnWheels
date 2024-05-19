import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';


@NgModule({
  declarations: [
    AdminPortalComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    CreateProductsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule
  ]
})
export class AdminPortalModule { }
