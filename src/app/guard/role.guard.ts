import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../shared/admin-login/login.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const currentUserData = loginService.getUserCredentialsFromLocalStorage();
  const expectedRole = route.data['expectedRole'];
  if (currentUserData?.role !== expectedRole) {
    router.navigate(['./management-portal/loginForm']);
    return false;
  }
  return true;
};
