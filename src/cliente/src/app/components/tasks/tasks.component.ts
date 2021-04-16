import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Task} from '../../Task';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task:Task;
  tasks: Array<Task>;
  title:string;
  constructor(private taskService: TasksService) {
    
       

    
   }


 


  

  ngOnInit() {
    this.tasks = new Array<Task>();
    //this.getHeroes();

  
   
  }
 /*
  getTask(): void {
  
    this.taskService.getTask().subscribe(resp =>{
    console.log(resp)
    resp.forEach(g=> this.tasks.push(g));
    console.log('task list');
    console.log(this.tasks);
  });
  

  
  
    
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.taskService.getTask());
    
  }*/




  addTask(event){
     event.preventDefault(); 
     console.log(event.title+ "aqui es");

     const newTask : Task ={
      _id : "",
      title: this.title,
       isDone: false


     };
     this.taskService.addTask(newTask)
      task =>{this.tasks.push(task)};
      console.log(this.tasks)
     
     
  }

  


deleteTask(id: Task): void{
    
   const response= confirm('are you sure')
   console.log(id)
   if(response){

    const tasks = this.tasks
    console.log("35546633")
    this.taskService.deleteTask(id)
    data=>{
      if(data.n==1){
        for(let i=0;i <= tasks.length; i++){

          tasks.splice(i, 1);

          }
        }

    
    }

   }
   return;
      
      
      console.log(2)
    }

    updateTask(task: Task){

      console.log(task);
      const newTask = {

        _id:task._id,
        title:task.title,
        isDone: !task.isDone


      };
      console.log(task);
      this.taskService.updateTask(newTask)

      
        task.isDone = !task.isDone;
        console.log(task.isDone);
      
    }
   
  }


