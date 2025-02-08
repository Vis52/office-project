import React from 'react';
import { Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <Outlet />  
    </div>
  );
};

export default Product;
