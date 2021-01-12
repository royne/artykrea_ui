import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav'
import { SectionHome } from "../layout/Section";
import '../../styles/home.css';
import img1 from '../../assets/images/unicornio.png'
import img2 from '../../assets/images/spiral_pink.png'
import img3 from '../../assets/images/etiqueta.png'
import text from '../../assets/images/text.png'
import BoxCategories from './BoxCategories';
import Construction from '../layout/Construction';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <SectionHome>
        <div className="home_info home_section">
          <h5>Artykrea</h5>
          <img src={text} alt="artykrea" />
        </div>
        <div className="home_img home_section">
          <div className="box_imgs">
            <img src={img1} className="img_principal" alt="figura artykrea" />
            <img src={img3} className="label_img" alt="figura artykrea" />
            <span>Detalles Especiales</span>
            <img src={img2} className="img_spin" alt="figura artykrea" />
          </div>
        </div>
      </SectionHome>
      <BoxCategories />
      <Construction />
    </>
  );
}
 
export default Home;