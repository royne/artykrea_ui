import React from 'react';
import Category from './category';

const CategoriesBox = () => {
  return ( 
    <section className="categories">
      <div className="categories_box">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </section>
   );
}
 
export default CategoriesBox;