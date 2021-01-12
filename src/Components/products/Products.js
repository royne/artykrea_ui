import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Construction from '../layout/Construction';
import BoxProducts from './BoxProducts';

const Products = (type = null) => {
  return ( 
    <>
      <Header />
      <Nav />
      <BoxProducts />
      <Construction />
    </>
   );
}
 
export default Products;