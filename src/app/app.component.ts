import { Component } from '@angular/core';
import {Todo} from './todo';
// Import class so we can register it as dependency injection token
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'app';

  // No longer needed, now handled by TodoListHeaderComponent
  // newTodo: Todo = new Todo();
  
    // Ask Angular DI system to inject the dependency
    // associated with the dependency injection token `TodoDataService`
    // and assign it to a property called `todoDataService`
    constructor(private todoDataService: TodoDataService) {
    }
  
    // Service is now available as this.todoDataService
    // But method is no longer needed; it's now handled by TodoListHeaderComponent
    // addTodo() {
    //   this.todoDataService.addTodo(this.newTodo);
    //   this.newTodo = new Todo();
    // }

    // Add new method to handle event emitted by TodoListHeaderComponent
    onAddTodo(todo: Todo) {
      this.todoDataService.addTodo(todo);
    }
  
    // rename from toggleTodoComplete
    onToggleTodoComplete(todo: Todo) {
      this.todoDataService.toggleTodoComplete(todo);
    }

    // toggleTodoComplete(todo) {
    //   this.todoDataService.toggleTodoComplete(todo);
    // }

    // rename from removeTodo
    onRemoveTodo(todo: Todo) {
      this.todoDataService.deleteTodoById(todo.id);
    }
    
    // removeTodo(todo) {
    //   this.todoDataService.deleteTodoById(todo.id);
    // }
  
    get todos() {
      return this.todoDataService.getAllTodos();
    }
}
