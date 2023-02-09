import { FincaService } from './../finca.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Finca } from '../finca';

@Component({
  selector: 'app-finca-detalles',
  templateUrl: './finca-detalles.component.html',
  styleUrls: ['./finca-detalles.component.css']
})
export class FincaDetallesComponent implements OnInit {

 id:number;
 finca:Finca;
 constructor(private route:ActivatedRoute, private FincaServicio:FincaService){}


 ngOnInit(): void {
   this.id = this.route.snapshot.params["id"];
   this.finca = new Finca();
   this.FincaServicio.obtenerFincaPorId(this.id).subscribe(dato=> {
    this.finca = dato;
   })


  }


}
