import { Component, OnInit } from '@angular/core';
import {Datos} from '../Datos';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  htmlStr: string = 'hola';
  valido: boolean=true;
  msgs: Array<Datos>;
  _id: string;
  Nombre: string;
  Email:string;
  Mensaje:string;

  constructor(public correo:TasksService) { }
  
  ngOnInit() {
    this.msgs = new Array<Datos>();
    document.getElementById("mensaje").style.color="purple";
    document.getElementById("mensaje").style.backgroundColor="yellow";
    
    
 
   
    
    
  
  }

  
   
  
  enviarMensaje(event, valido1){

    const Msg: Datos ={
      
       
      _id: "",
      Nombre: this.Nombre,
      Email: this.Email,
      Mensaje: this.Mensaje
    
    };
    
    alert("entro"  + valido1);
    
    
    this.correo.enviarEmail(Msg)
      task =>{this.msgs.push(task)};
      console.log(Msg)
        var valor=this.Email;
        var validar= true;
        var reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        
        
        if (reLargo.test(valor)){
         alert("La dirección de email " + valor + " es correcta.");
         validar=true;
         
        } else {
         
          validar=false;
        
         alert("La dirección de email es incorrecta.");
       
        }
        this.valido=validar;
         return validar;
      }
        
      
    //this.facturas.createFact(fact).subscribe((newFact)=>{console.log(newFact)});console.log(this.Nombre+this.Documento+this.Direccion);
  


  


}
