import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';

import { TasksService } from '../../services/tasks.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3002/api/upload';
@Component({
    selector: 'fotos',
    templateUrl: './fotos.component.html',
    styleUrls: ['./fotos.component.css'],
    providers:[TasksService]
})
export class FotosComponent {

  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

  

  constructor(private _fileService:TasksService){
      console.log(this.uploader);
      
      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
          this.attachmentList.push(JSON.parse(response));
      }

   
      
  }

  download(index){
      var filename = this.attachmentList[index].uploadname;

      this._fileService.downloadFile(filename)
      .subscribe(
          data => saveAs(data, filename),
          error => console.error(error)
      );
  }
 
}