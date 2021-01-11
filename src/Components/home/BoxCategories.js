import React, { useEffect } from 'react';
import styled from '@emotion/styled'
import Category from './Category';
import cat1 from '../../assets/images/categories/c1.png'
import cat2 from '../../assets/images/categories/c2.png'
import cat3 from '../../assets/images/categories/c3.png'
import cat4 from '../../assets/images/categories/c4.png'
import cat5 from '../../assets/images/categories/c5.png'
import cat6 from '../../assets/images/categories/c6.png'

const Section = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background: #${(props) => props.bg};
  .box_section {
    display: flex;
    padding: 2% 5%;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
  }
  & > h2 {
    padding-left: 5%;
    padding-top: 2%;
    font-size: 2.2rem;
    font-weight: normal;
    font-family: agency;
  }
`;

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
  console.log(items[0]);
  return (
    <>
      <Section className="box" bg="D99AA4">
        <h2>CATEGORIAS</h2>
        <div className="box_section">
          {items[0].map((elm, i) => <Category key={i} data={elm} bg="pink" />)}
        </div>
      </Section>
      <Section className="box" bg="1F2327">
        <h2>CATEGORIAS</h2>
        <div className="box_section">
          {items[1].map((elm , i) => <Category key={i} data={elm} bg="black" />)}
        </div>
      </Section>
    </>
  );
}
 
export default BoxCategories;