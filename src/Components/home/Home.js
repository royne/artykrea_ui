import React, {Fragment} from 'react';
import Header from './Header';
import Nav from './Nav';
import '../../styles/home.css';
import Social from './Social';
import BoxCategories from './BoxCategories';
import Fotter from './Fotter';
import Construction from './Construction';

const Home = () => {
  return ( 
    <Fragment>
      <Header />
      <section className="container_box">
        <Nav />
        <BoxCategories />
      </section>
      <Fotter />
      <Social />
      <Construction />
    </Fragment>
   );
}
 
export default Home;