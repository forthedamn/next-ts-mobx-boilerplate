import todoService, { ITodo } from '@serv/todo';
import { observable, action } from 'mobx';
class TodoList {
  @observable
  todoList: ITodo[] = [];

  @action
  async fetchTodoList(): Promise<void> {
    this.todoList = await todoService.fetchTodoList();
  }
}

export default new TodoList();
