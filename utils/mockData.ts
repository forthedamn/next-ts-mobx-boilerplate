import { ITodo } from '@serv/todo';

export const mockList: ITodo[] = [
  {
    id: '1',
    schema: 'This is a looooooooooooooooooong title',
    content: 'Do sth with my A plan',
    createTime: new Date('2018-01-01'),
    status: 1,
  },
  {
    id: '2',
    schema: 'B',
    content: 'Do sth with my B plan',
    createTime: new Date('2018-01-02'),
    status: 0,
  },
  {
    id: '3',
    schema: 'C',
    content: 'Do sth with my C plan',
    createTime: new Date('2018-01-03'),
    status: 1,
  }
];
