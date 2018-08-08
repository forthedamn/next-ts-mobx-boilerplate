import * as React from 'react';
import { ITodo, StatusEnum } from '@serv/todo';
import { format } from '@utl/timer';

import * as css from './index.css';

interface IProps extends ITodo {}

export default (props: IProps) => {
  return (
    <div>
      <div className={css.schema}>
        {props.schema}
      </div>
      <div className={css.createTime}>
        {format(props.createTime)}
      </div>
      <div className={css.content}>
        {props.content}
      </div>
      <div className={css.status}>
        <input type="checkbox" checked={props.status === StatusEnum.close}/>
      </div>
    </div>
  )
};
