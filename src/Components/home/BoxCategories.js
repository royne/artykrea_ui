import React, {useState, useEffect} from 'react';
import Category from './Category';
import cat1 from '../../assets/images/categories/c1.png'
import cat2 from '../../assets/images/categories/c2.png'
import cat3 from '../../assets/images/categories/c3.png'
import cat4 from '../../assets/images/categories/c4.png'
import cat5 from '../../assets/images/categories/c5.png'

const BoxCategories = () => {
  const [items, setItems] = useState([
    cat1, cat2, cat3, cat4, cat5
  ])

  useEffect(() => {
    const carrusel = () => {
      setInterval(() => {
        let i = items[0]
        let arryItems = items
        arryItems.shift()
        arryItems.push(i)
        setItems([])
        setItems(arryItems)
      }, 3000)
    }
    carrusel()
  }, [])

  return ( 
    <section className="categories">
      <Category img={items[0]} typeCategory={'accesorios'} />
      <Category img={items[1]} typeCategory={'recordatorios'} />
      <Category img={items[2]} typeCategory={'figuras'} />
      <Category img={items[3]} typeCategory={'variedad'} />
      <Category img={items[4]} typeCategory={'pines'} />
    </section>
   );
}
 
export default BoxCategories;