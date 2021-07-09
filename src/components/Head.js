import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <>
      <Helmet title='AGEM'>
        <html lang='en' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Belleza'
          rel='stylesheet'
        />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Natural skincare website'></meta>
      </Helmet>
    </>
  );
};

export default Head;
