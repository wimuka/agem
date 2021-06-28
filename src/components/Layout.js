import * as React from 'react';
import { Fragment } from 'react';
import Head from './Head';
import './styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head />
      <body>
        <div id='content' className='container'>
          {children}
        </div>
      </body>
    </Fragment>
  );
};

export default Layout;
