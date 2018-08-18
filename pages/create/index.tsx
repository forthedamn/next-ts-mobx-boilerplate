import * as React from 'react';
import Model from '@mod/CreateTodo';
import AppShell from '@comp/AppShell';
import { observer } from 'mobx-react';
import Link from 'next/link';

import * as css from './index.css';
import * as commonCss from '../index.css';

@observer
export default class CreateTodo extends React.Component {

  model = new Model();

  render() {
    return (
      <div className={commonCss.app}>
        <AppShell>
          <Link href={{pathname: '/'}}>
            <a>{`<Back`}</a>
          </Link>
          <div className={css.schema}>
            schema: <input
              type="text"
              value={this.model.todo.schema}
              onChange={async (e) => {
                this.model.todo.schema = e.target.value;
              }}
            />
          </div>
          <div className={css.content}>
            content: <textarea
              onChange={async (e) => {
                this.model.todo.content = e.target.value;
              }}
            >
              {this.model.todo.content}
            </textarea>
          </div>
          <button onClick={() => { this.model.createTodo(); }}>create</button>
        </AppShell>
      </div>
    );
  }

}
