import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaz/producto-descripcionVO';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.scss']
})
export class PortafolioItemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoID: string;

  constructor( private route : ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(parametros => {
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) => {
        this.productoID = parametros['id'];
        this.producto = producto
      });

    });
  }

}
