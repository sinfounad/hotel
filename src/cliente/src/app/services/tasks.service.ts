import { Injectable, ComponentFactoryResolver } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Task} from '../Task';
import {Datos} from '../Datos';
import {Fact} from '../components/fact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  domain: string ="http://localhost:3002/api";
  domain2: string="http://localhost:4000";
  constructor(private http: HttpClient) {}

 
 
  getUsers(){
      return this.http.get<Task[]>(this.domain);
  }

  public getFiles(): Observable < any[] > {  
    return this.http.get < any[] > (this.domain + '/getFiles');  
}


  downloadFile(file:String){
    var body = {filename:file};
    console.log(body);
    
    return this.http.post(this.domain + '/download',body,{
        responseType : 'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
        
    });

}

uploadFiles(formData) {
  let urlAPI = 'http://localhost:3000/api/upload';
  return this.http.post(urlAPI, formData);
}


  
  uploadFile(formData): any {
    let myDir = "/upload";
    for(var pair of formData.entries()) {
      console.log("valores");
      console.log(pair[0]);
      console.log(pair[1]);
   }
    //console.log(formData.getAll());
    return this.http.post(this.domain + myDir, formData);
    
    
  }
      
      
  

  getFact (): Observable<Array<Fact>> {
    console.log(78891223);
   let getAllTask = "/fact";
   return this.http.get<Array<Fact>>(this.domain + getAllTask)
   
 }

 getF(id: string) :Observable <Fact[]>{

  const path = `${this.domain}/task/${id}`;
  return this.http.get<Fact[]>(path);
}




    /*public getTask():Observable<Task[]>
    {
      
      this.http.get<Task[]>(this.domain+'/task').subscribe(resp =>{
        let response;
        response = resp;
        console.log(response);
        
        return response;
      });
    }*/
    addTask(newTask): any {
      this.http.post<Task>(this.domain + '/task', newTask).subscribe(resp =>{
        console.log("running");
        let response = resp;
        //response = resp;
        return response;
      }
      );
        
    }


  
    
    deleteTask(is){
      console.log(is+"q2wwe");
      return this.http.post<String>(this.domain+'/Delete', is)
      
      .subscribe(resp =>{
        let response;
        response = resp;
        console.log("Entra")
        console.log(is+"q2wwe")

        return response;
      }
      );
      
    }
    updateTask(newTask){
         
      this.http.put(this.domain+'/update', newTask)
      .subscribe(resp =>{
        let response;
        response = resp;
        return response;
      });

    }


    
  /*
    updateFact(task: Task){

      const path = `${this.domain}/posts/${task._id}`;
      return this.http.put<Task>(path,task);
    }*/


    createFact(newTask): any {
      this.http.post<Fact>(this.domain + '/fact', newTask).subscribe(resp =>{
        console.log("running1");
        let response = resp;
        //response = resp;
        return response;
      }
        );
        
    }


    enviarEmail(newMensaje): any {
      this.http.post<Datos>(this.domain + '/msg', newMensaje).subscribe(resp =>{
        console.log("running2");
        let response = resp;
        //response = resp;
        return response;
      }
        );
        
    }
   
}
