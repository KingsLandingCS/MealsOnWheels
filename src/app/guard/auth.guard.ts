import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../shared/admin-login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.getLoginTokenFromLocalStorage()) {
    router.navigate(['./management-portal/loginForm']);
    return false;
  }
  return true;
};
