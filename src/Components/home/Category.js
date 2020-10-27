import React from 'react';
import { Link } from 'react-router-dom'

const Category = ({ img, typeCategory, index }) => {
  return (
    <label htmlFor={`s${index}`} id={`slide${index}`}>
      <Link to={`/${typeCategory}`} >
        <img src={img} height="455" width="188" className="slide"/>
      </Link>
    </label> 
   );
}
 
export default Category;