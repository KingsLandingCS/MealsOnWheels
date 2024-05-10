import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPortalRoutingModule } from './main-portal-routing.module';
import { MainPortalComponent } from './main-portal.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { AboutComponent } from './main-components/about/about.component';
import { ContactComponent } from './main-components/contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MainPortalComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ViewProductsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MainPortalRoutingModule,
    NgxPaginationModule
  ]
})
export class MainPortalModule { }
