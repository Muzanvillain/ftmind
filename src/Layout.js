import React from 'react';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;