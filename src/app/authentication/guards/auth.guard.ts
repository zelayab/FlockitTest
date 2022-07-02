import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, UrlTree ,CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from '../token.service';




@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private TokenService: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree > | Promise<boolean | UrlTree> | boolean | UrlTree {
    // esta funcion se ejecuta cuando se intenta acceder a una ruta protegida y no esta autenticado y redirige al login
    if (!this.TokenService.isAutorized()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;

    }
  }


}
