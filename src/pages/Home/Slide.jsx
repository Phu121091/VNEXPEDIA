import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Img1 from '../../data/images/banner/2.jpg';
import Img2 from '../../data/images/banner/3.jpg';
import Img3 from '../../data/images/banner/4.jpg';
import Img4 from '../../data/images/banner/5.jpg';
import Img5 from '../../data/images/banner/6.jpg';
import './Slide.css';

const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
}
//   const slideImages = [
//     {
//       url: {Img1},
//       caption: 'Slide 1'
//     },
//     {
//       url: {Img2},
//       caption: 'Slide 2'
//     },
//     {
//       url: {Img3},
//       caption: 'Slide 3'
//     },
//     {
//       url: {Img4},
//       caption: 'Slide 4'
//     },
//     {
//       url: {Img5},
//       caption: 'Slide 5'
//     }  
//   ];

const SlideBig = () => {
  return (
    <Carousel effect="fade" autoplay duration='5s'>
    <div>
      <div style={contentStyle} className='slide-item1'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item2'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item3'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item4'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item5'></div>
    </div>
  </Carousel>
  )
}

export default SlideBig