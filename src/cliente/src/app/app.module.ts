import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TasksService} from './services/tasks.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GaleryComponent } from './components/galery/galery.component';
import { Galery2Component } from './components/galery2/galery2.component';
//import { FacturaComponent } from './components/factura/factura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import{MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ContactoComponent } from './contacto/contacto.component';
import { ListarComponent } from './components/listar/listar.component';
import { LoginnComponent } from './components/loginn/loginn.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

import { ReporteComponent } from './components/reporte/reporte.component';
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component';
import {FileUploadModule} from 'ng2-file-upload';
import { GArchivosComponent } from './components/garchivos/garchivos.component';
import { EnsayoAComponent } from './components/ensayo-a/ensayo-a.component';
import { ReservaComponent } from './components/reserva/reserva.component';



//import { NgxFileDropModule } from 'ngx-file-drop';




@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    MenuComponent,
    FooterComponent,
    FotosComponent,
    GaleriaComponent,
    GaleryComponent,
    Galery2Component,
    
    ContactoComponent,
    ListarComponent,
    LoginnComponent,
    InicioComponent,
    ConsultarComponent,
    ImagenesComponent,
 
    ReporteComponent,
    GestionArchivosComponent,
    GArchivosComponent,
    EnsayoAComponent,
    ReservaComponent
    
   
   
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatMomentDateModule,
    ImageUploadModule.forRoot(),
    FileUploadModule
    //NgxFileDropModule
   
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
