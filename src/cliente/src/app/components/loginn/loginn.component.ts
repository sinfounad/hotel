import { Component, OnInit } from '@angular/core';
import {Login} from '../../Login';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  //https://itelisoft.com/como-utilizar-el-localstorage-en-angula/
  msgs: Array<Login>;
 
  _id: "";
  Email:string;
  Password:string;
  MiEmail:string="ivanpinedita@gmail.com";
  MiPswd="ABCPin";



  constructor(public login:TasksService) { }
  //localStorage.setItem('tutorial', 'Como utilizar el LocalStorage en Angular');
  ngOnInit() {

    //this.iniciarSesion()
  
  }

  


  iniciarSesion(){

   
  

    const Msg: Login ={
      
       
      _id: "",
      
      Email: this.Email,
      Password: this.Password 
      
    
    };

    var ValoresIngresados=this.Email+this.Password;
    var ValoresAlmacenados=this.MiEmail+this.MiPswd;
    if(ValoresIngresados==ValoresAlmacenados){
      localStorage.setItem('tutorial', 'permitido');
      window.location.href = '/galery'

    }else{

      localStorage.setItem('tutorial', 'denegado');
      window.location.href = '/factura'
    }
      
    var dato = localStorage.getItem('tutorial');

    alert("Los datos ingresados sona: "+ this.Email+' '+this.Password +dato+ "afs");
  }

}
