import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaz/infoPagina.interfaz';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    console.log('Informacion servicio para pagina');

    // leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (response: InfoPagina) => {
      console.log(response);
      this.cargada = true;
      this.info = response;
    });
   }
}
