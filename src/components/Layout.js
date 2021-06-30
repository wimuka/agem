import * as React from 'react';
import { Fragment } from 'react';
import Head from './Head';
import './styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head />
      <div id='root'>
        <div id='content' className='container'>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
