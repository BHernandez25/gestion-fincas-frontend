import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarFincaComponent } from './actualizar-finca/actualizar-finca.component';
import { FincaDetallesComponent } from './finca-detalles/finca-detalles.component';
import { ListaFincasComponent } from './lista-fincas/lista-fincas.component';
import { RegistrarFincaComponent } from './registrar-finca/registrar-finca.component';

const routes: Routes = [
  {path: "fincas",component:ListaFincasComponent},
  {path: "",redirectTo: "fincas",pathMatch:"full"},
  {path: "registrar-finca",component: RegistrarFincaComponent},
  {path: "actualizar-finca/:id",component: ActualizarFincaComponent},
  {path: "finca-detalles/:id",component: FincaDetallesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
