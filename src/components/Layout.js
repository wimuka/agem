import * as React from 'react';
import Head from './Head';
import './styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <body>
        <div id='root'>
          <div id='content' className='container'>
            {children}
          </div>
        </div>
      </body>
    </>
  );
};

export default Layout;
