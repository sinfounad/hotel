import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { GaleryComponent } from './components/galery/galery.component';
import { Galery2Component } from './components/galery2/galery2.component';
//import {FacturaComponent} from './components/factura/factura.component';
import {ListarComponent} from './components/listar/listar.component';
import {LoginnComponent} from './components/loginn/loginn.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {ConsultarComponent} from './components/consultar/consultar.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import {ContactoComponent} from './contacto/contacto.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

import { GArchivosComponent } from './components/garchivos/garchivos.component';
import { EnsayoAComponent } from './components/ensayo-a/ensayo-a.component';
import { ReservaComponent } from './components/reserva/reserva.component';
const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'task', component: TasksComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'galery', component: GaleryComponent},
  { path: 'galery2', component: Galery2Component},
  //{ path: 'factura', component: FacturaComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'login', component: LoginnComponent},
  { path: 'inicio', component: InicioComponent},
   {path: 'consultar', component:  ConsultarComponent},
   {path: 'imagenes', component:  ImagenesComponent},
   {path: 'reporte', component:  ReporteComponent},

   {path: 'subirAr', component:  EnsayoAComponent},
   {path: 'reserva', component:  ReservaComponent},
 
 
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
