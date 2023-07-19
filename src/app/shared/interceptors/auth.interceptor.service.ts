import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, throwError, of } from "rxjs"
import { AuthService } from "src/app/auth/auth.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private toaster: ToastrService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getToken()
        if (token) {


            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(req).pipe(
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/auth/login'])
                        this.toaster.warning('Token expired , please login again!', 'Warning')
                    }
                }
                return throwError(() => new Error('Something wrong occured!'))

            })
        )


    }
}
