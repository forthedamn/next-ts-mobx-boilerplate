import todoService, { ITodo } from '@serv/todo';
import { observable, action, computed } from 'mobx';
class TodoList {

  @observable
  _todoList: ITodo[] = [];

  @computed
  get todoList() {
    return this._todoList.filter((item) => {
      return !item.delete;
    });
  }

  set todoList(value) {
    this._todoList = value;
  }

  @action
  async fetchTodoList(): Promise<void> {
    this._todoList = await todoService.fetchTodoList();
  }
}

export default new TodoList();
