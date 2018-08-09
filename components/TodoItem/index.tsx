import * as React from 'react';
import { ITodo, StatusEnum } from '@serv/todo';
import { format } from '@utl/timer';

import * as css from './index.css';

interface IProps extends ITodo {
  onChange: () => void;
}

export default (props: IProps) => {
  return (
    <div className={css.container}>
      <div className={css.line}>
        <div className={css.schema} title={props.schema}>
          {props.schema}
        </div>
        <div>
          {format(props.createTime)}
        </div>
      </div>
      <div className={css.line}>
        <div className={css.content}>
          {props.content}
        </div>
        <div>
          <input
            type="checkbox"
            onChange={props.onChange}
            checked={props.status === StatusEnum.close}
          />
        </div>
      </div>
    </div>
  );
};
