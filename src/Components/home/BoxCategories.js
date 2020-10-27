import React, { useEffect } from 'react';
import Category from './Category';
import cat1 from '../../assets/images/categories/c1.png'
import cat2 from '../../assets/images/categories/c2.png'
import cat3 from '../../assets/images/categories/c3.png'
import cat4 from '../../assets/images/categories/c4.png'
import cat5 from '../../assets/images/categories/c5.png'

const BoxCategories = () => {
  const items = [
    { url: cat1, type: 'accesorios' },
    { url: cat2, type: 'recordatorios' },
    { url: cat3, type: 'figuras' },
    { url: cat4, type: 'variedad' },
    { url: cat5, type: 'pines' }
  ]

  useEffect(() => {
    const animation = () => {
      const timeInterval = 3000;
      const slides = ['#slide2', '#slide1', '#slide5', '#slide4', '#slide3']
      slides.forEach((elm, i) => {
        const elmId = document.querySelector(elm)
        if (elmId !== null) {
          const interval = setInterval(() => {
            elmId.click()
            clearInterval(interval)
          }, timeInterval * (i + 1));
        }
      })
    }
    const time = () => {
      setInterval(() => {
        animation()
      }, 15000)
    }
    animation()
    time() 
  })

  return ( 
    <section id="slider" className="">
      <input type="radio" name="slider" id="s1" />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" defaultChecked />
      <input type="radio" name="slider" id="s4" />
      <input type="radio" name="slider" id="s5" />
      { items.map((elm, i) => <Category key={elm.type} img={elm.url} typeCategory={elm.type} index={i + 1} />) }
    </section>
   );
}
 
export default BoxCategories;