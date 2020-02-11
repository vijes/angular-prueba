import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaz/infoPagina.interfaz';
import { EquipoVO } from '../interfaz/equipoVO';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: EquipoVO[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarItem();
   }

   private cargarInfo() {
    console.log('Informacion servicio para pagina');

    // leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (response: InfoPagina) => {
      this.cargada = true;
      this.info = response;
    });
   }

   public cargarItem() {

    this.http.get('https://angulartest-407f2.firebaseio.com/equipo.json')
      .subscribe( (responseEquipo: EquipoVO[]) => {
        this.equipo = responseEquipo;
      });
   }
}
