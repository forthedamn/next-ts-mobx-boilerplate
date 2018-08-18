import { mockList } from '@utl/mockData';

export enum StatusEnum {
  close = 0,
  open = 1,
}
export interface ITodo {
  id?: string;
  schema: string;
  content?: string;
  createTime?: Date;
  status?: StatusEnum;
  delete?: boolean;
}
class TodoService {
  async fetchTodoList(): Promise<ITodo[]> {
    return await new Promise<ITodo[]>((resolve) => {
      setTimeout(() => {
        resolve(mockList);
      }, 500);
    });
  }

  async fetchTodoDetail(id: string): Promise<ITodo> {
    return await new Promise<ITodo>((resolve) => {
      setTimeout(() => {
        resolve(mockList.filter((item) => item.id === id)[0]);
      }, 500);
    });
  }

  async updateTodo(todo: ITodo) {
    return await new Promise<{success: boolean}>((resolve) => {
      setTimeout(() => {
        mockList.forEach((item, index) => {
          if (item.id === todo.id) {
            mockList[index] = todo;
          }
        });
        resolve({success: true});
      }, 500);
    });
  }

  async createTodo(todo: ITodo) {
    return await new Promise<{success: boolean, id: string}>((resolve) => {
      setTimeout(() => {
        todo.id = String(mockList.length + 1);
        todo.createTime = new Date();
        mockList.push(todo);
        resolve({success: true, id: todo.id});
      }, 500);
    });
  }

}

export default new TodoService();
