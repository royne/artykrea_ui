import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Product from './Product';

const BoxProducts = (props) => {
  const [items, setItems] = useState([])
  const {category} = useParams()
  
  useEffect(() => {
    const getProducts = () => {
      const url = `http://localhost:4000/api/v1/products?type=${category}`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setItems(data)
        })
    }
    if (Object.keys(items).length === 0) {
      getProducts()
    }
  }, [])


  return (
    <section className="box_products">
      <h1>{category}</h1>
      <div className="container_products">
        {items ? items.map(elm => <Product record={elm} key={elm[0].id} />) : null}
      </div>
    </section> 
   );
}
 
export default BoxProducts;