import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TasksService } from '../../services/tasks.service';

import { Fact } from '../fact';
import {saveAs} from 'file-saver';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  index:string;
  uploaadedFiles: Array<File>
  facts: Array<Fact>;
  attachmentList:any = [];
  FileExtenxion:String;
  jpg:any = [];
  png:any = [];
  PDF:any = [];
  EXCEL:any = [];
  contJPG: number=0;
  contPNG: number=0;
  contPDF: number=0;
  contExcel: number=0;

  lstFileDetails: any;
  constructor(private Datos:TasksService) { }
  ngOnInit() {
   
    this.facts = new Array<Fact>();
    
   
  
    console.log(this.index);
  }

  obtenerFilas(){

    this.Datos.getFiles().subscribe(result => {  
      this.lstFileDetails = result;  
      console.log(this.lstFileDetails);
      this.fileValidation();
     
  })  


  }
 onUpload(){

  let formData =new FormData()
  for(let i=0; i< this.uploaadedFiles.length; i++){

     formData.append("uploads[]" , this.uploaadedFiles[i], this.uploaadedFiles[i].name )

  }
  var Bolero="Une tu voz"
    this.Datos.uploadFile(formData).suscribe((res)=>{
    console.log('Response',res)
    console.log('Response',res)
  })

 }


 getFact(): void {
   
       

  this.facts=[];
  this.Datos.getFact().subscribe(resp =>{
  console.log(resp)
  resp.forEach(nombre => this.facts.push(nombre));
  console.log('Facturas');
  console.log(this.facts);
});

  //.subscribe(tasks => this.tasks = tasks);
  console.log(this.Datos.getFact());
  
}


 download(index){
  
  console.log("eerero"+index);
  var filename = this.attachmentList[index];
    console.log(filename);
  this.Datos.downloadFile(index)
  .subscribe(
      data => saveAs(data, index),
      error => console.error(error)
  );
}


  
 upload() :void {

  
  let formData = new FormData();
  var Bolero="Une tu voz";
  for (var i = 0; i < this.uploaadedFiles.length; i++) {
    formData.append("uploads[]", this.uploaadedFiles[i], this.uploaadedFiles[i].name);
    console.log(this.uploaadedFiles[i].name);
  }
  console.log(this.uploaadedFiles);
  this.Datos.uploadFile(formData)
  .subscribe((res)=> {
    console.log('response received is ', res);
  });
  
  console.log("eres");
  console.log(formData);
  /*
  this.Datos.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.Datos.getFact());
    */

  }
  

 onFileChange(e){

    this.uploaadedFiles= e.target.files;

    console.log(this.uploaadedFiles[0].name)
    console.log("Waw entro", e);
 }

  fileValidation(){

  for ( var i=0; i<=45;i++){

    //console.log(this.lstFileDetails[i]);
   alert("aca esta resjsk,adqadavia")
  var filePath="gaf";
  console.log("2");
  var allowedExtensions = /(.jpg|.jpeg|.png|.gif|.pdf)$/i;
  var valida = allowedExtensions.exec(filePath);
    console.log("eres");
  if(!allowedExtensions.exec(filePath)){
      alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
     
      return false;
  }else{

    
      console.log("sfatrayyayay")
    
          
          
          
         
      
    
  }

}

/*
  var fileInput = document.getElementById('file');
  var filePath = fileInput.value;
  console.log(filePath);
  var allowedExtensions = /(.jpg|.jpeg|.png|.gif|.pdf)$/i;
  var valida = allowedExtensions.exec(filePath);
  if(!allowedExtensions.exec(filePath)){
      alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
     
      return false;
  }else{
      //Image preview
      if (fileInput.files && fileInput.files[0]) {
               if(valida==".jpg,.jpg"){

                  alert("es un JPG "+"/"+ valida )
               }
               if(valida==".png,.png"){

               alert("es un png "+"/"+ valida )
               }
          
          
          var reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
          };
          reader.readAsDataURL(fileInput.files[0]);
      }
  }
}
  
*/
}
}
