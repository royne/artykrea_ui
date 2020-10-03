import React, {useState, useEffect} from 'react';
import Product from './Product';

const ProductContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const url = 'http://localhost:4000/api/v1/products'
      const request = await fetch(url)
      const response = await request.json()
      console.log(response)
      setItems(response)
    }
    if (Object.keys(items).length === 0) {
      getProducts()
    } 
  })

  return ( 
    <section className="product_container">
      {items ? items.map(elm => <Product record={elm} key={elm[0].id} />) : null}
    </section>
   );
}
 
export default ProductContainer;