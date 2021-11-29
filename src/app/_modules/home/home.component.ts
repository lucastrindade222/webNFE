import { Component, OnInit } from '@angular/core';
import { MenuItem} from 'primeng/api';
import { Notafiscal } from 'src/app/_shared/notafiscal.model';
import { HomeService } from './services/home.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : HomeService) { }

  
item: MenuItem[] = [];
items: MenuItem[] = []; 
notafiscals: Notafiscal[] = [];

  

    ngOnInit() {
console.log(this.notafiscals)
this.gethome();
        this.items = [
            {
                label:'Filtros',
                icon:'pi pi-fw pi-clone',
                items:[
                    {
                        label:'Filtro atual Estados',
                        icon:'pi pi-fw pi-chart-line',
                        items:[
                        {
                            label:'AM',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/AM"
                        },
                        {
                            label:'BA',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/BA"
                        },
                        {
                            label:'CE',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/CE"
                        },
                        {
                            label:'GO',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/GO"
                        },
                        {
                            label:'MG',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/MG"
                        },
                        {
                            label:'MS',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/MS"
                        },
                        {
                            label:'MT',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/MT"
                        },
                        {
                            label:'PE',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/PE"
                        },
                        {
                            label:'PR',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/PR"
                        },
                        {
                            label:'RS',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/RS"
                        },
                        {
                            label:'SP',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/SP"
                        },
                        {
                            label:'SVAN',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/SVAN"
                        },
                        {
                            label:'SVRS',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/SVRS"
                        },
                        {
                            label:'SVC-AN',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/SVC-AN"
                        },
                        {
                            label:'SVC-RS',
                            icon:'pi pi-fw pi-bookmark',
                            routerLink:"estado/SVC-RS"
                        }
                        

                        ]
                    },
                    {
                        label:'Buscar por hora',
                        icon:'pi pi-fw pi-calendar'
                    } 
                ]
            },
          
        ];
    }

    gethome(){
        this.service.gethome().subscribe(
            (obj) => {
                this.notafiscals = obj;
                 }
        )
    }
  }


