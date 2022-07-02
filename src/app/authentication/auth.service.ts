import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Login } from '../core/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable user
  user = of(
    { username: 'admin', password: 'admin' , code: 200 }
  )

  //variable error
  error = of({
    message: 'Username or password is incorrect', code: 401
  })

constructor() { }

  //function login
  login(login: Login): Observable<any> {
    if(login.password === "admin"){
      return this.user;
    } else {
      return this.error;
    }
  }
}
