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
}
class TodoService {
  async fetchTodoList(): Promise<ITodo[]> {
    return await new Promise<ITodo[]>((resolve) => {
      setTimeout(() => {
        resolve(mockList);
      }, 1000);
    });
  }

  async fetchTodoDetail(id: string): Promise<ITodo> {
    return await new Promise<ITodo>((resolve) => {
      setTimeout(() => {
        resolve(mockList.filter((item) => item.id === id)[0]);
      }, 500);
    });
  }
}

export default new TodoService();
