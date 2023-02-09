import { FincaService } from './../finca.service';
import { Component, OnInit } from '@angular/core';
import { Finca } from '../finca';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-finca',
  templateUrl: './registrar-finca.component.html',
  styleUrls: ['./registrar-finca.component.css']
})
export class RegistrarFincaComponent implements OnInit {
  finca : Finca = new Finca();

  constructor(private fincaServicio:FincaService,private router:Router){}

  ngOnInit(): void {

   }
   guardarFinca(){
    this.fincaServicio.registrarFinca(this.finca).subscribe(
      {
        next:dato =>{
        console.log(dato);
        this.irALaListaDeFincas();
    },
    error:error =>
    {console.log(error);
   }
  });
}

   irALaListaDeFincas(){
    this.router.navigate(["/fincas"]);
   }

   onSubmit(){
    this.guardarFinca();
   }

}
