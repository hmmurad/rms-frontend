// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private toaster: ToastrService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const expectedRole = route.data['role'];

        if (!this.authService.isLoggedIn()) {
            // Redirect the user to the login page or some unauthorized page.
            return this.router.parseUrl('/auth/login');
        }

        console.log(expectedRole);


        const userRoles = this.authService.getUserFromToken().user.roles;

        if (userRoles && userRoles.includes(expectedRole)) {
            // The user has the required role, allow access.
            return true;
        }

        // Redirect the user to some unauthorized page.
        this.toaster.warning('You are not authorized to this page!')
        return this.router.parseUrl('/dashboard');
    }
}
