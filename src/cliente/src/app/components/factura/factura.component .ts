import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

import { Fact } from '../fact';
import { Task } from 'src/app/Task';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//https://www.devglan.com/angular/angular-8-crud-example
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  facts: Array<Fact>;
  Nombre:string;
  Documento:string;
  Direccion:string;
  Correo: string;
  Telefono: string;
  Habitacion: string;
  Entrada: string;
  Salida: string;
  ida:String;
  constructor(public facturas:TasksService) { }

  ngOnInit() {
    this.facts = new Array<Fact>();
    this.getFact();
  }


  getFact(): void {
  
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.facturas.getFact());
    
  }

/*
  createTask(event){
     var variable=2;

     var  E = this.Entrada.toString();
     var  S = this.Entrada.toString();
    const fact: Fact ={
    
    _id: "",
    nombre:  this.Nombre,
    documento: this.Documento,
    direccion: this.Direccion,
    correo: this.Correo,
    telefono: this.Telefono,
    habitacion: E,
    entrada:   S,
    salida: this.Salida,
    
    };
    
     this.facturas.createFact(fact)
      task =>{this.facts.push(task)};
      console.log(this.facts)
    //this.facturas.createFact(fact).subscribe((newFact)=>{console.log(newFact)});console.log(this.Nombre+this.Documento+this.Direccion);
  }
  */
   Salir(){

    console.log("entro");
   };

  createTask(event){

    event.preventDefault(); 

    var variable=2;

    var  E = this.Entrada.toString();
    var  S = this.Salida.toString();
   const fact :Fact ={
   
   _id: "",
   nombre:  this.Nombre,
   documento: this.Documento,
   direccion: this.Direccion,
   correo: this.Correo,
   telefono: this.Telefono,
   habitacion: this.Habitacion,
   entrada:   E,
   salida: S,
   
   };
   
    this.facturas.createFact(fact)
     task =>{this.facts.push(task)};
     console.log(fact.direccion)
   //this.facturas.createFact(fact).subscribe((newFact)=>{console.log(newFact)});console.log(this.Nombre+this.Documento+this.Direccion);
 
    console.log(event.title);
  }

}
