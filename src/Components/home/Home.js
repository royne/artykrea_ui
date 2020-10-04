import React, {Fragment} from 'react';
import Header from './Header';
import Nav from './Nav';
import '../../styles/home.css';
import Social from './Social';
import Slider from './Slider';

const Home = () => {
  return ( 
    <Fragment>
      <Header />
      <Nav />
      <Social />
      <section className="section_slider">
        <Slider />
      </section>
    </Fragment>
   );
}
 
export default Home;