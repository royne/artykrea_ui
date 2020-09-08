import React from 'react';
import Product from './Product';

const ProductContainer = () => {
  return ( 
    <section className="product_container">
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
   );
}
 
export default ProductContainer;