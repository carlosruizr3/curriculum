import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Injectable()
export class JtwInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any = {};

    if (this.auth.isLogged()) {
      headers = {
        ...headers,
        Authorization: `${this.auth.getToken()}`
      };

      request = request.clone({ setHeaders: headers });

      return next.handle(request).pipe(tap((value: HttpEvent<any>) => {
      }), catchError((err: HttpErrorResponse) => {
        if (err.status === 403 && this.router.routerState.snapshot.url !== '/login') {
          this.router.navigateByUrl('/login');
          this.auth.logout();
        } else if (err.status === 401) {
          this.auth.logout();
          this.router.navigateByUrl('/login');
        }
        return throwError(err)
      }));
    }
    return next.handle(request);
  }
}
