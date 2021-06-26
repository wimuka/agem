import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Header />
      </Layout>
    </>
  );
};

export default IndexPage;
