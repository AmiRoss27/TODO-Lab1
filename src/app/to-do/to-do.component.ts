import { Component, OnInit } from '@angular/core';
import {ToDos} from 'src/app/to-do/to-do'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {

  todos: ToDos[]; 

  constructor() { 
    this.todos = [
      {
        task: 'Fold clothes',
        completed: false,
      },
      {
        task: 'Put clothes in dresser',
        completed: false,
      },
      {
        task: 'Relax',
        completed: false,
      },
      {
        task: 'Try to pet cat',
        completed: true,
      },
      {
        task: 'Pet dog',
        completed: false,
      },
      {
        task: 'Be awesome',
        completed: false,
      },
    ]
  }

  ngOnInit(): void {
    console.log('App Init');
    //Any extra init functionality goes here
  }

  //Complete Task
  completeTask(todo: any){
    todo.completed = true;
  }

  //Delete Task
  deleteTask(todo: any){
    let index = this.todos.findIndex(task => task === todo)
    this.todos.splice(index, 1);
  }

}
