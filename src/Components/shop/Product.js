import React from 'react';

const Product = ({record}) => {
  console.log(record.photo)
  return ( 
    <div className="product">
      <img src={record[0].url} />
      <p>{record[0].name}</p>
    </div>
   );
}
 
export default Product;