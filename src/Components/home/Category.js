import React from 'react';
import { Link } from 'react-router-dom'
import { Card, BoxType, CardFoot, BtnView } from "../ui/Card";

const Category = ({ data, bg }) => {
  return (
    <Card bg={bg}>
      <img src={data.url} />
      <BoxType bg={bg}>
        <span>{data.type}</span>
      </BoxType>
      <CardFoot bg={bg}>
        <p>{data.name}</p>
        <BtnView bg={bg}>VER</BtnView>
      </CardFoot>
    </Card>
  );
}
 
export default Category;