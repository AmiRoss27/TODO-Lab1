import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './to-do/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Task[], searchText: string | null) {
    if(!searchText){
      return todos;
    }
      return todos.filter((todos: Task) => todos.task.includes(searchText));
  }

}
