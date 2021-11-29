import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoComponent } from './_modules/estado/estado/estado.component';
import { HomeComponent } from './_modules/home/home.component';

const routes: Routes = [


  {
    path:'',
    component:HomeComponent
  },
  {
    path:'estado/:uf',
    component:EstadoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
