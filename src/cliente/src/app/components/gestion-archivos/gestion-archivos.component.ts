import { Component, OnInit } from '@angular/core';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {saveAs} from 'file-saver';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TasksService } from '../../services/tasks.service';

import {Task} from '../../Task';

import { Observable } from 'rxjs';
const url ='http://localhost:3002/file/upload';
const uri ='http://localhost:3000/file/upload';


@Component({
  selector: 'app-gestion-archivos',
  templateUrl: './gestion-archivos.component.html',
  styleUrls: ['./gestion-archivos.component.css']
})
export class GestionArchivosComponent implements OnInit {
  
  uploadedFiles: Array < File > ;
  constructor(private serviceUpload: TasksService) {}

  ngOnInit() {}

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.serviceUpload.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }

  



  
}
