import React, {Fragment} from 'react';
import ButtonProduct from './ButtonProduct';

const Product = ({record}) => {
  return ( 
    <Fragment>
      <div className="product">
        <div className="product_content">
          <img src={record.image_url} />
        </div>
        <ButtonProduct />
      </div>
    </Fragment>
   );
}
 
export default Product;