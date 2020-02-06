import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TratamientoComponent } from './componentes/tratamiento/tratamiento.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TratamientoComponent,
    ContactoComponent,
    FooterComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
