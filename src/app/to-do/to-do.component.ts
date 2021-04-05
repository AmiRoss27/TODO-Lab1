import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/to-do/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {

  todos: Task[]; 

  searchText: string | null = null;

  newTask: string;

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
  }

  removeTask(todo: Task){
    let index = this.todos.findIndex(task => task === todo)
    this.todos.splice(index, 1);
  }

  addTask(){
   this.todos.push({
     task: this.newTask, completed:false
   })
  }
}

  