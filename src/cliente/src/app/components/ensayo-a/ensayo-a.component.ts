import { Component, OnInit } from '@angular/core';
//import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { TasksService } from '../../services/tasks.service';
import {saveAs} from 'file-saver';
const uploadAPI = 'http://localhost:4000/api/upload'; // better use a service class
@Component({
  selector: 'app-ensayo-a',
  templateUrl: './ensayo-a.component.html',
  styleUrls: ['./ensayo-a.component.css']
})
export class EnsayoAComponent implements OnInit {
  lstFileDetails: any;
  attachmentList:any = [];
  htmlStr: string = '<img>';
  constructor(public serviceFile:TasksService) { }

  title = 'ng8fileuploadexample';
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  ngOnInit() {

    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         alert('Your file has been uploaded successfully');
    };

   
    this.serviceFile.getFiles().subscribe(result => {  
      this.lstFileDetails = result;  
      console.log(this.lstFileDetails);
    this.prueba();
  })
   var index="222";
   this.download(index);
 }


 download(index){

   var Nombre="Diapositiva1.jpg";
    console.log("eerero"+index);
    var filename = this.attachmentList[index];
    console.log(filename);
  this.serviceFile.downloadFile(index)
  .subscribe(
      data => saveAs(data, index),
      error => console.error(error),

  );
  
  var nombre = "Juan";
console.log(`¡Hola ${nombre}!`);
}


prueba(){
  alert('hola');
  document.getElementById('imagenes').innerHTML="este";
}





}
