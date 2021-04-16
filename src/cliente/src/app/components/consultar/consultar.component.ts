import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact';
import { TasksService } from '../../services/tasks.service';
//import { FacturaComponent } from '../factura/factura.component';
import {interval, timer} from 'rxjs';

import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  factura: Fact[] = [];
  facts: Array<Fact>;
  facty:Array<Fact>;
  Nombre:string;
  Documento:string;
  Direccion:string;
  Correo: string;
  Telefono: string;
  Habitacion: string;
  Entrada: string;
  Salida: string;
   c: string;
   b: string;
   mostrar=false;

  constructor(public facturas:TasksService) {
    
   }

  ngOnInit() {
    
    this.facts  = new Array<Fact>();
    this.facty  = new Array<Fact>();
    
   

    this.c="";
    /*
    const cuenta= timer(10000);

    cuenta.subscribe((n)=>{
      this.getFact();
      //console.log('cada:' + n+ 'segundos');
    });

   */
    
    
    
   
    
  }



  getFact(): void {
   
       

    this.facts=[];
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.facturas.getFact());
    
  }


deleteFact(id: Fact): void{
    
  const response= confirm('are you sure')
  console.log(id)
  if(response){

   const tasks = this.facts
   console.log("35546633")
   this.facturas.deleteTask(id)
   data=>{
     if(data.n==1){
       for(let i=0;i <= tasks.length; i++){

         tasks.splice(i, 1);

         }
       }

   
   }

  }

  const cuenta= timer(4000);

    cuenta.subscribe((n)=>{
      this.getFact();
      //console.log('cada:' + n+ 'segundos');
    });
  return;
     
     
     console.log(2)
   }
 
   updateFact(event, d, factura){

     console.log(d);
     console.log(this.c);

    
     //var  E = this.Entrada.toString();
     //var  S = this.Entrada.toString();
     const FacturaActual: any[] = this.factura;
     const newFact : Fact = {
  
 

        _id:d,
        
       
        nombre:  factura.nombre,
        documento: factura.documento,
        direccion: factura.direccion,
        correo: factura.correo,
        telefono: factura.telefono,
        habitacion: factura.habitacion,
        entrada:   factura.entrada,
        salida: factura.salida,

       };
   
     console.log("quiubo" +this.Nombre );
     this.facturas.updateTask(newFact)

     
   
       console.log(this.Correo);
       const cuenta= timer(4000);

       cuenta.subscribe((n)=>{
         this.getFact();
         //console.log('cada:' + n+ 'segundos');
       });
       
   }

   prueba(fact:Fact){
      this.mostrar=!this.mostrar;
      this.c=fact.nombre;
     console.log(this.mostrar);
   }

    getFactura(fact:Fact) {
    this.mostrar=!this.mostrar;
    this.c=fact._id;
    this.facturas.getF(fact._id).subscribe( mifactura =>{
    this.factura = mifactura
    console.log(this.factura);
    }
      
      
  );
     console.log("Hola")
    //.subscribe(tasks => this.tasks = tasks);
   }  
 
  }

  


