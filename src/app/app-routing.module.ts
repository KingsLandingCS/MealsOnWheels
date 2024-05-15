import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { roleGuard } from './guard/role.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) },
  { path: 'main-portal', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) },
  { path: 'management-portal', loadChildren: () => import('./management-portal/management-portal.module').then(m => m.ManagementPortalModule) },
  { path: 'admin-portal', canActivate: [authGuard, roleGuard], data: { expectedRole: 'admin' }, loadChildren: () => import('./admin-portal/admin-portal.module').then(m => m.AdminPortalModule) },
  { path: 'user-portal', loadChildren: () => import('./user-portal/user-portal.module').then(m => m.UserPortalModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
