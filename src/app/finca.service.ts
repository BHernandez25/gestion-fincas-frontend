import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Finca } from './finca';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  //URl OPTIENE EL LISTADO DE TODOS LAS FINCAS EN EL BACKEND
  private baseURL = "http://localhost:8080/api/v1/fincas";

  constructor(private httpClient : HttpClient) { }

  //ESTE METODO OBTIENE EL LISTADO DE TODAS LAS FINCAS
  obtenerListaDeFincas():Observable<Finca[]>{
    return this.httpClient.get<Finca[]>(`${this.baseURL}`);
  }


   //ESTE METODO REGISTRAR UNA  FINCA
   registrarFinca(finca:Finca) :Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,finca);
   }


   //ESTE METODO ACTUALIZAR UNA  FINCA
   actualizarFinca(id:number,finca:Finca) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,finca);
   }

     //ESTE METODO SIRVE PARA OBTENER O BUSCAR UNA  FINCA
     obtenerFincaPorId(id:number):Observable<Finca>{
      return this.httpClient.get<Finca>(`${this.baseURL}/${id}`);
     }

     eliminarFinca(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
     }


}
