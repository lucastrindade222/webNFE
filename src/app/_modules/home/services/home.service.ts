import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Notafiscal } from "src/app/_shared/notafiscal.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}


gethome(){
 
  return this.http.get<Notafiscal[]>(
    "http://localhost:8080/api/notafical/ut"
  );


}

}
