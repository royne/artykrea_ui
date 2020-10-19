import React from 'react';
import Category from './Category';
import cat1 from '../../assets/images/categories/c1.png'
import cat2 from '../../assets/images/categories/c2.png'
import cat3 from '../../assets/images/categories/c3.png'
import cat4 from '../../assets/images/categories/c4.png'
import cat5 from '../../assets/images/categories/c5.png'

const BoxCategories = () => {
  return ( 
    <section className="categories">
      <Category img={cat1}/>
      <Category img={cat2}/>
      <Category img={cat3}/>
      <Category img={cat4}/>
      <Category img={cat5}/>
    </section>
   );
}
 
export default BoxCategories;