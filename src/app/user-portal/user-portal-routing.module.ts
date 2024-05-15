import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPortalComponent } from './user-portal.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: UserPortalComponent
  , children: [
    { path: '', component: DashboardComponent, },
    { path: 'dashboard', component: DashboardComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPortalRoutingModule { }
