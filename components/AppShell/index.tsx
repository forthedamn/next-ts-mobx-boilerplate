import * as React from 'react';

import * as css from './index.css';

interface IProps {
  title?: string;
  children?: React.ReactChildren;
}

export default (props: IProps) => (
  <div className={css.appshell}>
    <header>{props.title || 'My TodoList'}</header>
      <div className="content">
        {props.children}
      </div>
    <footer>Copyright © 2018 TodoList💗.</footer>
  </div>
);
