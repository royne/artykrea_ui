import React, {Fragment} from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav'
import styled from '@emotion/styled'
import '../../styles/home.css';
import img1 from '../../assets/images/unicornio.png'
import img2 from '../../assets/images/spiral_pink.png'
import img3 from '../../assets/images/etiqueta.png'
import text from '../../assets/images/text.png'
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
    & > img {
      width: 100%;
    }
    & > h5 {
      font-size: 2.5rem;
      color: #c23c57;
      font-weight: normal;
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
        width: 170px;
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
    .img_spin {
      position: absolute;
      width: 150%;
      bottom: 0;
      left: 0;
      transform: translateX(-20%);
      z-index: -1;
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
          <img src={text} />
        </div>
        <div className="home_img home_section">
          <div className="box_imgs">
            <img src={img1} className="img_principal" />
            <img src={img3} className="label_img" />
            <span>Detalles Especiales</span>
            <img src={img2} className="img_spin" />
          </div>
        </div>
      </Section>
      <BoxCategories />
      {/* <section className="container_box">
      </section>
      <Fotter />
      <Social /> */}
      <Construction />
    </Fragment>
  );
}
 
export default Home;