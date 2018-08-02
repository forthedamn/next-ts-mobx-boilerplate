import * as React from 'react';
import model from '@mod/TodoList';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {

  async componentWillMount() {
    await model.fetchTodoList();
  }

  render() {
    return (
      <div>
        {JSON.stringify(model.todoList)}
      </div>
    );
  }

}
