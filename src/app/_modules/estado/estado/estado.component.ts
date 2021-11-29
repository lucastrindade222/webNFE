import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Aux } from 'src/app/_shared/aux.model';
import { Notafiscal } from 'src/app/_shared/notafiscal.model';
import { EstadoService } from '../services/estado.service';
@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  nota :Notafiscal = {
    autorizador: {
      id: undefined,
      nome: undefined
    }
  }; 
  constructor(private route: ActivatedRoute, private service :EstadoService) { }

  ngOnInit() {
    const uf =  this.route.snapshot.paramMap.get("uf");
    this.getEstado(uf);
  
  }


getEstado(uf :any){

  this.service.getEstado(uf).subscribe(


    (aux) => {
   console.log(aux);
   this.nota = aux 
  }
  );


  

}




}
