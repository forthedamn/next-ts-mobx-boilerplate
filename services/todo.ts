import { mockList } from '@utl/mockData';

export enum StatusEnum {
  delete = 0,
  close = 1,
  open = 2,
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
}

export default new TodoService();
