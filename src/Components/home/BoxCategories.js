import React from 'react';
import Category from './Category';
import { Section } from "../layout/Section";
import cat1 from '../../assets/images/categories/c1.png'
import cat2 from '../../assets/images/categories/c2.png'
import cat3 from '../../assets/images/categories/c3.png'
import cat4 from '../../assets/images/categories/c4.png'
import cat5 from '../../assets/images/categories/c5.png'
import cat6 from '../../assets/images/categories/c6.png'

const BoxCategories = () => {
  const items = [
    [
      { url: cat1, type: 'Figuras',  name: 'Garfield' },
      { url: cat2, type: 'Recordatorios',  name: 'Concha' },
      { url: cat3, type: 'Accesorios',  name: 'Sirenitas' },
    ],
    [
      { url: cat4, type: 'Pines', name: 'Pines' },
      { url: cat5, type: 'Mugs', name: 'Mugs' },
      { url: cat6, type: 'Prendedores', name: 'Prendedores' }
    ]
  ]

  return (
    <>
      <Section className="box" bg="D99AA4" resourceType="category">
        <h2>CATEGORIAS</h2>
        <div className="box_section">
          {items[0].map((elm, i) => <Category key={i} data={elm} bg="pink"/>)}
        </div>
      </Section>
      <Section className="box" bg="1F2327" resourceType="category">
        <h2>CATEGORIAS</h2>
        <div className="box_section">
          {items[1].map((elm , i) => <Category key={i} data={elm} bg="black" />)}
        </div>
      </Section>
    </>
  );
}
 
export default BoxCategories;