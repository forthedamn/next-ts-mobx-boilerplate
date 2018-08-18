
// tslint:disable
declare module 'next/link' {
  interface ILinkProps {
    href: {
      pathname: string;
      query?: any;
    };
  }
  class Link extends React.Component<ILinkProps> {}
  export default Link;
}

declare module 'next/router' {

  namespace Router {
    export function push({pathname: string}): void {}
  }

  export default Router;
}

declare module 'next/document' {
  export default class Document extends React.Component {}
  class Head extends React.Component {}
  class Main extends React.Component {}
  class NextScript extends React.Component {}
}

declare module 'next' {
  interface NextProps<T> {
    url: {
      query: T
    };
  }
}

declare module 'next-typed-css';
