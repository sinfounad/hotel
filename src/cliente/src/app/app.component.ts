import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
const url ='http://localhost:3000/file/upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  uploader:FileUploader= new FileUploader({url:url});
  atacmentList: any=[];

  constructor(){
    this.uploader.onCompleteItem=(item:any, response:any, staus:any, headers:any)=>{
      this.atacmentList.push(JSON.parse(response));
    }
  }
}
