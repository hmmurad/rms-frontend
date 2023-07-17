import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isUserLoggedIn) {
    console.log('from guard');

    return true;
  }

  // Redirect to the login page
  return router.parseUrl('auth/login');
};
