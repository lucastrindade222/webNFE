import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
 
import { Notafiscal } from "src/app/_shared/notafiscal.model";
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) {}

  getEstado(uf:any){
    console.log(uf);
    return this.http.get<Notafiscal>(
      "http://localhost:8080/api/notafical/estado?estado="+uf
    );
  }


}
