import * as React from 'react';
import model from '@mod/TodoList';
import AppShell from '@comp/AppShell';
import { observer } from 'mobx-react';
import TodoItem from '@comp/TodoItem';

import * as css from './index.css';

@observer
export default class TodoList extends React.Component {

  async componentDidMount() {
    await model.fetchTodoList();
  }

  render() {
    return (
      <div className={css.app}>
        <AppShell>
          {model.todoList.map((data, index) => {
            return <TodoItem {...data} onChange={() => { data.status = +!data.status; }} key={index}/>;
          })}
        </AppShell>
      </div>
    );
  }

}
