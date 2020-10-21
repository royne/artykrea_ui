import React, {Fragment} from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import '../../styles/products.css';
import Social from '../layout/Social';
import Fotter from '../layout/Fotter';
import Construction from '../layout/Construction';
import BoxProducts from './BoxProducts';

const Products = (type = null) => {
  return ( 
    <Fragment>
      <Header />
      <section className="container_box">
        <Nav />
        <BoxProducts />
      </section>
      <Fotter />
      <Social />
      <Construction />
    </Fragment>
   );
}
 
export default Products;