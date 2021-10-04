import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Home from 'pages/Home';

const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Header />
      <Home/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
