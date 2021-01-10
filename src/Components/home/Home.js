import React, {Fragment} from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav'
import styled from '@emotion/styled'
import '../../styles/home.css';
import img1 from '../../assets/images/unicornio.png'
import img2 from '../../assets/images/espiral.png'
import img3 from '../../assets/images/etiqueta.png'
import Social from '../layout/Social';
import BoxCategories from './BoxCategories';
import Fotter from '../layout/Fotter';
import Construction from '../layout/Construction';

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 160px);
  margin-top: 170px;
  padding: 2% 5%;
  display: flex;
  box-sizing: border-box;
  .home_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .home_info {
    width: 30%;
    align-items: flex-start;
    padding-left: 5%;
    & > h5 {
      font-size: 2rem;
      color: #1c91ca;
      margin-bottom: 10px;
    }
    & > h2 {
      font-size: 4.5rem;
      font-family: agency;
    }
  }
  .home_img {
    width: 70%;
    align-items: center;
    & > img {
      max-width: 70%;
    }
    .box_imgs {
      position: relative;
      & > span {
        position: absolute;
        top: 25%;
        left: 75%;
        width: 100%;
        font-size: 2rem;
        font-family: absolute;
      }
    }
    .img_principal {
      transform: scaleX(-1);
    }
    .label_img {
      position: absolute;
      top: 20%;
      left: 55%;
      width: 80%;
    }
  }
`;

const Home = () => {
  return ( 
    <Fragment>
      <Header />
      <Nav />
      <Section>
        <div className="home_info home_section">
          <h5>Artykrea</h5>
          <h2>Diseños, <br/>figuras <br/> y mas...</h2>
        </div>
        <div className="home_img home_section">
          <div className="box_imgs">
            <img src={img1} className="img_principal"/>
            <img src={img3} className="label_img"/>
            <span>Detalles Especiales</span>
          </div>
          <img src={img2} className=""/>
        </div>
      </Section>
      {/* <section className="container_box">
        <BoxCategories />
      </section>
      <Fotter />
      <Social />
      <Construction /> */}
    </Fragment>
   );
}
 
export default Home;