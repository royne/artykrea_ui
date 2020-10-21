import React, {useState, useEffect} from 'react';
import Product from './Product';

const BoxProducts = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const url = 'https://8e356dee22eb.ngrok.io/api/v1/products'
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
    <section className="box_products">
      <h1>Figuras</h1>
      <div className="container_products">
        {items ? items.map(elm => <Product record={elm} key={elm[0].id} />) : null}
      </div>
    </section> 
   );
}
 
export default BoxProducts;