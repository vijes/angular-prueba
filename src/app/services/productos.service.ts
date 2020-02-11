import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoVO } from '../interfaz/productoVO';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoVO[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    this.http.get('https://angulartest-407f2.firebaseio.com/productos_idx.json')
      .subscribe( (responseProductos: ProductoVO[]) => {
        this.productos = responseProductos;
        setTimeout(() => {
          this.cargando = false;
          
        }, 2000);
      });
  }

}
