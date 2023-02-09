import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Finca } from '../finca';
import { FincaService } from '../finca.service';


@Component({
  selector: 'app-lista-fincas',
  templateUrl: './lista-fincas.component.html',
  styleUrls: ['./lista-fincas.component.css']
})
export class ListaFincasComponent implements OnInit {

  fincas:Finca[];

  constructor(private fincaServicio:FincaService,private router:Router){}

  ngOnInit(): void {
   this.obtenerFincas();
  }

  actualizarFinca(id:number){
    this.router.navigate(["actualizar-finca",id]);
  }


  private obtenerFincas(){
    this.fincaServicio.obtenerListaDeFincas().subscribe(dato => {
      this.fincas = dato;
    });
  }
  eliminarFinca(id:number){
    this.fincaServicio.eliminarFinca(id).subscribe(dato=> {
      console.log(dato);
      this.obtenerFincas();
    });
  }

  verDetallesDelaFinca(id:number){
    this.router.navigate(["finca-detalles",id]);

  }

}
