import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../assets/images/slider/1.png'
import image2 from '../../assets/images/slider/2.png'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return ( 
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={image1} />
        <div data-src={image2} />
      </AutoplaySlider>
   );
}
 
export default Slider;