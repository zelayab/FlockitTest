import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/authentication/token.service';
import { ProvincesService } from 'src/app/data/provinces.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // variables para mostrar las provincias en el select de provincias
  textInput: string = '';
  provinces: any

  constructor(
    private provincesService: ProvincesService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  valueChange(newValue: string) {
    // este metodo se encarga de buscar las provincias que contengan el texto ingresado en el input de busqueda y mostrarlas en el select de provincias
    this.provincesService.getProvinces(newValue).subscribe(res => {
      this.provinces = res.provincias
    }, error => {
      this.provinces = []
    })
  }

  logout() {
    // este metodo se encarga de borrar el token del localStorage y redirigir al login
    this.tokenService.clearToken()
    this.router.navigate(['/'])
  }

}
