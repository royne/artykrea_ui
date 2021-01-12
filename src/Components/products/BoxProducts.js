import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useParams} from "react-router-dom";
import { Section } from '../layout/Section'
import Product from '../products/Product'

const BoxSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 170px;
  padding: 2% 5%;
  display: flex;
  box-sizing: border-box;
`

const BoxProducts = () => {
  const [items, setItems] = useState([])
  const {category} = useParams()
  
  useEffect(() => {
    if (Object.keys(items).length === 0) {
    const getProducts = () => {
      // const url = `https://atkapi.herokuapp.com/api/v1/products?type=${category}`
      const url = `http://localhost:4000/api/v1/products?type=${category}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        });
    };
      getProducts();
    }
  }, [category, items]);

  return (
    <BoxSection>
      <Section bg="1F2327" resourceType="product">
        <h2>{category}</h2>
        <div className="box_section">
          {items &&
            items.map((elm, i) => <Product key={i} data={elm} bg="black" />)}
        </div>
      </Section>
    </BoxSection>
  );
}
 
export default BoxProducts;