import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from 'src/app/to-do/task'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Task;
  
  @Output() delete: EventEmitter<Task> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
    console.log('Child Init');
  }
  
  //Complete Task
  completeTask(todo: Task){
    todo.completed = true;
  }

  //Delete Task
  removeTask(todo: Task){
    this.delete.emit(todo);
  }
}
