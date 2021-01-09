import React, {Fragment} from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import '../../styles/home.css';
import Social from '../layout/Social';
import BoxCategories from './BoxCategories';
import Fotter from '../layout/Fotter';
import Construction from '../layout/Construction';

const Home = () => {
  return ( 
    <Fragment>
      <Header />
      <Nav />
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