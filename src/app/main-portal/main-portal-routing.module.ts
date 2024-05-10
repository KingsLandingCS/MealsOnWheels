import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { AboutComponent } from './main-components/about/about.component';
import { ContactComponent } from './main-components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: MainPortalComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'viewProducts/:id', component: ViewProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
