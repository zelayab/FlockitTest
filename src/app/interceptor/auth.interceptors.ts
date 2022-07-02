import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { TokenService } from "../authentication/token.service";



@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = this.tokenService.getToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
      return next.handle(cloned);
    }
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err.status === 401) {
          this.router.navigateByUrl('');
          this.tokenService.clearToken();
        }
        if(err.status === 404){
          this.router.navigateByUrl('');
        }
        return throwError(err);
      })
    );
  }
}
