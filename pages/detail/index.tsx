import * as React from 'react';
import model from '@mod/TodoDetail';
import AppShell from '@comp/AppShell';
import { observer } from 'mobx-react';
import { NextProps } from 'next';
import Link from 'next/link';

import * as css from './index.css';
import * as commonCss from '../index.css';

import TitleLine from './TitleLine';

interface IProps extends NextProps<{ id: string}> {}

@observer
export default class TodoDetail extends React.Component<IProps> {

  async componentDidMount() {
    await model.fetchTodoDetail(this.props.url.query.id);
  }

  async statusHandler() {
    model.todo.status = model.todo.status = +!model.todo.status;
    await model.updateTodoDetail();
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
          <TitleLine
            {...model.todo}
            statusHandler={this.statusHandler}
            deleteHandler={this.deleteHandler}
          />
          <input
            className={css.schema}
            type="text"
            value={model.todo.schema}
            onChange={async (e) => {
              model.todo.schema = e.target.value;
              await model.updateTodoDetail();
            }}
          />
          <textarea
            className={css.content}
            onChange={async (e) => {
              model.todo.content = e.target.value;
              await model.updateTodoDetail();
            }}
          >
            {model.todo.content}
          </textarea>
        </AppShell>
      </div>
    );
  }

}
