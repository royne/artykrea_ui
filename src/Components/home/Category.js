import React from 'react';
import { Link } from 'react-router-dom'

const Category = ({ img, typeCategory }) => {
  return ( 
    <div className="category_box">
      <Link to={`/${typeCategory}`} >
        <img src={img} />
      </Link>
    </div>
   );
}
 
export default Category;