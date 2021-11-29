import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_modules/home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { EstadoComponent } from './_modules/estado/estado/estado.component'
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    CardModule,
    FieldsetModule,
 
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
