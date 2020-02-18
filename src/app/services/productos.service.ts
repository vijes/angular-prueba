import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoVO } from '../interfaz/productoVO';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoVO[] = [];
  productosFiltrados: ProductoVO[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angulartest-407f2.firebaseio.com/productos_idx.json')
        .subscribe((responseProductos: ProductoVO[]) => {
          this.productos = responseProductos;
          setTimeout(() => {
            this.cargando = false;
            resolve();
          }, 2000);
        });
    });

  }

  getProducto(id: String) {
    return this.http.get(`https://angulartest-407f2.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string) {
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach((prod) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });

  }
}
