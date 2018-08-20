// tslint:disable:jsx-no-bind
import * as React from 'react';
import Model from '@mod/TodoDetail';
import AppShell from '@comp/AppShell';
import { observer } from 'mobx-react';
import { NextProps } from 'next';
import Link from 'next/link';
import Router from 'next/router';

import * as css from './index.css';
import * as commonCss from '../index.css';

import TitleLine from './TitleLine';

interface IProps extends NextProps<{ id: string}> {}

@observer
export default class TodoDetail extends React.Component<IProps> {

  model = new Model();

  async componentDidMount() {
    await this.model.fetchTodoDetail(this.props.url.query.id);
  }

  async statusHandler() {
    this.model.todo.status  = +!this.model.todo.status;
    await this.model.updateTodoDetail();
  }

  async deleteHandler() {
    this.model.todo.delete = true;
    await this.model.updateTodoDetail();
    return Router.push({
      pathname: '/',
    });
  }

  render() {
    return (
      <div className={commonCss.app}>
        <AppShell>
          <Link href={{pathname: '/'}}>
            <a>{`<Back`}</a>
          </Link>
          <TitleLine
            {...this.model.todo}
            statusHandler={this.statusHandler.bind(this)}
            deleteHandler={this.deleteHandler.bind(this)}
          />
          <input
            className={css.schema}
            type="text"
            value={this.model.todo.schema}
            onChange={async (e) => {
              this.model.todo.schema = e.target.value;
              await this.model.updateTodoDetail();
            }}
          />
          <textarea
            className={css.content}
            onChange={async (e) => {
              this.model.todo.content = e.target.value;
              await this.model.updateTodoDetail();
            }}
          >
            {this.model.todo.content}
          </textarea>
        </AppShell>
      </div>
    );
  }

}
