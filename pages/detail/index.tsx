import * as React from 'react';
import model from '@mod/TodoDetail';
import AppShell from '@comp/AppShell';
import { observer } from 'mobx-react';
import { NextProps } from 'next';
import Link from 'next/link';

import * as css from './index.css';
import * as commonCss from '../index.css';

import TittleLine from './TittleLine';

interface IProps extends NextProps<{ id: string}> {}

@observer
export default class TodoDetail extends React.Component<IProps> {

  async componentDidMount() {
    await model.fetchTodoDetail(this.props.url.query.id);
  }

  statusHandler() {
    model.todo.status = model.todo.status = +!model.todo.status;
  }

  deleteHandler() {
    console.log('delete');
  }

  render() {
    return (
      <div className={commonCss.app}>
        <AppShell>
          <Link href={{pathname: '/'}}>
            <a>{`<Back`}</a>
          </Link>
          <TittleLine
            {...model.todo}
            statusHandler={this.statusHandler}
            deleteHandler={this.deleteHandler}
          />
          <div className={css.content}>
            {model.todo.content}
          </div>
        </AppShell>
      </div>
    );
  }

}
