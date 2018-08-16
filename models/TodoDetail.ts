import todoService, { ITodo } from '@serv/todo';
import { observable, action } from 'mobx';
class TodoDetail {
  @observable
  todo: ITodo = {
    schema: ''
  };

  @action
  async fetchTodoDetail(id: string): Promise<void> {
    this.todo = await todoService.fetchTodoDetail(id);
  }

  @action
  async updateTodoDetail(): Promise<{success: boolean}> {
    return await todoService.updateTodo(this.todo);
  }
}

export default new TodoDetail();
