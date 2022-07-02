import { Injectable } from '@angular/core';
import { User } from '../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

  export class TokenService {
    static TOKEN_ID: string = "store";

    // esta funcion hace un get del token y lo retorna si no existe retorna null
    public getToken(): User {
      const token: User = this.get();
      if (token) {
        return token;
      } else {
        // el ! es para que no sea nulo
        return null!;
      }
    }

    // esta funcion se ejecuta cuando se autentica y guarda el token en el localStorage
    public tokenInStore(store: User, storeSave?: boolean): void {
      if (!storeSave) {
        // el setItem es para guardar el token en el localStorage
        localStorage.setItem(TokenService.TOKEN_ID, JSON.stringify(store));
      } else {
        sessionStorage.setItem(TokenService.TOKEN_ID, JSON.stringify(store));
      }
    }

    // esta funcion remueve el token
    public clearToken(): void {
      localStorage.removeItem(TokenService.TOKEN_ID);
      sessionStorage.removeItem(TokenService.TOKEN_ID);
    }

    //esta funcion get parsea el token y lo retorna
    public get(): User {
      return JSON.parse(localStorage.getItem(TokenService.TOKEN_ID) || sessionStorage.getItem(TokenService.TOKEN_ID)!);
      // el ! es para que no sea nulo
    }

    // esta funcion se ejecuta cuando se intenta acceder a una ruta protegida y no esta autenticado y redirige al login
    public isAutorized(): boolean {
      return !!this.getToken();
    }
    constructor() { }
  }

