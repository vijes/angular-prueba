import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _infoServicio: InfoPaginaService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  buscarProducto( txtBuscar: string ) {
    if ( txtBuscar.length < 1 ){
      return;
    }
    this.router.navigate(['/search', txtBuscar]);    
  }
}
