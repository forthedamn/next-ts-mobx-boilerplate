import todoService, { ITodo } from '@serv/todo';
import { observable, action } from 'mobx';
import Router from 'next/router';

class CreateTodo {
  @observable
  todo: ITodo = {
    schema: ''
  };

  @action
  async createTodo(): Promise<void> {
    if (!this.todo.schema && !this.todo.content) {
      alert('Plz set schema or content');
      return;
    }
    const ret = await todoService.createTodo(this.todo);
    if (ret.success) {
      Router.push({
        pathname: '/',
      });
    }
    return;
  }
}

export default CreateTodo;
