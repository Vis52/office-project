import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../Home.js';
import './Layout.css'

const Layout = () => {
  return (
    <div>
      <Header />
     
      {/* <Home /> */}
      <Outlet/>
     
      <Footer/>
    </div>
  )
}

export default Layout;
