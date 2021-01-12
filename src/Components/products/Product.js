import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardFoot, BtnView, BtnPay, BoxPrice, CardFootBtns } from "../ui/Card";

const Product = ({ data, bg }) => {
  
  return (
    <Card bg={bg}>
      <img src={data.image_url} />
      <CardFoot bg={bg}>
        <p>{data.name}</p>
        <BoxPrice>${data.price}</BoxPrice>
      </CardFoot>
      <CardFootBtns>
        <BtnView bg={bg}>VER</BtnView>
        <BtnPay>COMPRAR</BtnPay>
      </CardFootBtns>
    </Card>
  );
};

export default Product;