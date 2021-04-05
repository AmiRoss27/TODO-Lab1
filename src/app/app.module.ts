import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import {FormsModule} from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
