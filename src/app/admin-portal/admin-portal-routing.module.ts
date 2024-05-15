import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: AdminPortalComponent
  , children: [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
