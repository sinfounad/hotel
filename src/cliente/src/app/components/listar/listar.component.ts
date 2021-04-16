import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Fact } from '../fact';
//https://www.youtube.com/watch?v=7Y1KpLbMTJw
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  facts: Array<Fact>;
  Nombre:string;
  Documento:string;
  Direccion:string;
  Correo: string;
  Telefono: string;
  Habitacion: string;
  Entrada: string;
  Salida: string;

  constructor(public facturas:TasksService) { }

  ngOnInit() {

    this.facts = new Array<Fact>();
    this.getFact();

  }
  Salir(){

    console.log(2222222);
  }

  getFact(): void {
    console.log('Facturas');
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.facturas.getFact());
    
  }

}
