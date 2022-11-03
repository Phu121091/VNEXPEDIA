import { duration } from 'moment';
import React from 'react';
// import AboutUsDefault from './AboutUs.style';
import { useState } from 'react';
import ImgBG from '../../../data/images/banner/sea.jpg';
import './AboutUs.css';

const AboutUs = () => {
  // const [localX,setlocalX]=useState('noplay');
  // window.addEventListener('scroll', function() {
  //   console.log(window.pageYOffset + 'px') ;
  //   if (window.pageYOffset>3800) setlocalX('play');
  // });

  return (
    // <AboutUsDefault>
      <div className="aboutus" style={{backgroundImage:`url${ImgBG}`}}>
        <h1>About Us</h1>
        <hr className="hr1" />
        <div className="aboutus-contain">
          <div className="aboutus-border">
            <p>
              We are the ultimate travel and tour leading company based in Any
              State. We are experts in the extraordinary with a worldwide
              portfolio. Inspiring memorable holidays with skilled and First Aid
              certified guides for over 20 years. We always ensure you are
              happy, assisted, and safe during your tour.
            </p>
          </div>
        </div>
        <hr className="hr2" />
      </div>
    // </AboutUsDefault>
  );
};

export default AboutUs;
