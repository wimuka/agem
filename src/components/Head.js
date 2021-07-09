import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <>
      <Helmet title='AGEM'>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Natural skincare products'></meta>
      </Helmet>
    </>
  );
};

export default Head;
