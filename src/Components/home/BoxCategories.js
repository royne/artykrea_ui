import React from 'react';
import Category from './Category';
import Pins from '../../assets/images/categories/pins.png'
import Accessories from '../../assets/images/categories/accessories.png'
import varieties from '../../assets/images/categories/varieties.png'
import figures from '../../assets/images/categories/figures.png'

const BoxCategories = () => {
  return ( 
    <section className="categories">
      <Category img={Pins}/>
      <Category img={Accessories}/>
      <Category img={varieties}/>
      <Category img={figures}/>
    </section>
   );
}
 
export default BoxCategories;