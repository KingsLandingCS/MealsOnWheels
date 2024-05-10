import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPortalComponent } from './management-portal.component';
import { LogInFormComponent } from './management-components/log-in-form/log-in-form.component';
import { SignUpFormComponent } from './management-components/sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path: '', component: ManagementPortalComponent, children: [
      { path: '', component: SignUpFormComponent },
      { path: 'signUp', component: SignUpFormComponent },
      { path: 'loginForm', component: LogInFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule { }
