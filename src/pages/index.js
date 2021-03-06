import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MustHaves from '../components/MustHaves';
import Features from '../components/Features';
import BlogPicks from '../components/BlogPicks';
import EmailBanner from '../components/EmailBanner';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <main>
          <Navbar />
          <Header />
          <MustHaves />
          <Features />
          <BlogPicks />
          <EmailBanner />
          <Reviews />
          <Footer />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
