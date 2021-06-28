import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MustHaves from '../components/MustHaves';

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <main>
          <Navbar />
          <Header />
          <MustHaves />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
