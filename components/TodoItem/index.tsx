import * as React from 'react';
import { ITodo, StatusEnum } from '@serv/todo';
import { format } from '@utl/timer';
import Link from 'next/link';

import * as css from './index.css';

interface IProps extends ITodo {}

export default (props: IProps) => {
  return (
    <Link href={{ pathname: '/detail', query: { id: props.id } }} >
      <div className={css.container}>
          <div className={css.line}>
            <span className={css.schema} title={props.schema}>
              {props.schema}
            </span>
            <span>
              {format(props.createTime)}
            </span>
          </div>
          <div className={css.line}>
            <span className={css.content}>
              {props.content}
            </span>
            <span>
              <input
                type="checkbox"
                checked={props.status === StatusEnum.close}
              />
            </span>
          </div>
      </div>
    </Link>
  );
};
