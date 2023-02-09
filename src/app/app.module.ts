import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFincasComponent } from './lista-fincas/lista-fincas.component';
import { HttpClientModule } from "@angular/common/http";
import { RegistrarFincaComponent } from './registrar-finca/registrar-finca.component';
import { FormsModule } from '@angular/forms';
import { ActualizarFincaComponent } from './actualizar-finca/actualizar-finca.component';
import { FincaDetallesComponent } from './finca-detalles/finca-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFincasComponent,
    RegistrarFincaComponent,
    ActualizarFincaComponent,
    FincaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
