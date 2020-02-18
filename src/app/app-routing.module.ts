import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';
import { TratamientoComponent } from './componentes/tratamiento/tratamiento.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: PortafolioItemComponent},
  {path: 'tratamiento', component: TratamientoComponent},
  {path: 'contactos', component: ContactoComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }