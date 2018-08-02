import { ITodo, StatusEnum } from '@serv/todo';

export const mockList: ITodo[] = [
  {
    id: '1',
    schema: 'A',
    content: 'Do sth with my A plan',
    createTime: new Date('20180101'),
    status: StatusEnum.close,
  },
  {
    id: '2',
    schema: 'B',
    content: 'Do sth with my B plan',
    createTime: new Date('20180102'),
    status: StatusEnum.open,
  },
  {
    id: '3',
    schema: 'C',
    content: 'Do sth with my C plan',
    createTime: new Date('20180103'),
    status: StatusEnum.delete,
  }
];
