import * as React from 'react';
import Link from 'next/link';
import { format } from '@utl/timer';
import { ITodo, StatusEnum } from '@serv/todo';

import * as css from '@page/detail/index.css';

interface ITittleLinkProps extends ITodo {
  statusHandler: () => void;
  deleteHandler: () => void;
}

const TitleLine = (props: ITittleLinkProps) => (
  <div className={css.titleContainer}>
    <span>
      {format(props.createTime)}
    </span>
    <span>
      done: <input
        type="checkbox"
        onChange={props.statusHandler}
        checked={props.status === StatusEnum.close}
      />
    </span>
    <Link href={{pathname: '/'}}>
      <a onClick={props.deleteHandler}>delete</a>
    </Link>
  </div>
);

export default TitleLine;
