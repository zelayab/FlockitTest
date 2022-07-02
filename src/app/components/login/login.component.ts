import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import { Login } from 'src/app/core/models/login.model';
import { TokenService } from '../../authentication/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataLogin = {} as Login;
  message = '';
  hide = true;
  checkbox = false;


  constructor(
    private router: Router,
    private authService: AuthService,
    private TokenService: TokenService
  ) { }

  ngOnInit() {
  }

  useLogin(){
    this.authService.login(this.dataLogin).subscribe(
        res => {
          if (res['code'] === 200) {
            // aqui se guarda el token en el localStorage y se redirige a la pagina Home
            this.TokenService.tokenInStore(res);
            this.router.navigate(['/home']);
          } else
          // aqui se muestra el mensaje de error en el caso de que no se pueda iniciar sesion o no exista el usuario
          this.message = res['message'];
          // aqui se aplica un timeout para que se muestre el mensaje de error durante unos segundos
            setTimeout(() => {
              this.message ='';
            }
            , 500);
          }, error => {
            this.message = error.error.message
          }
      );
    }
  }


