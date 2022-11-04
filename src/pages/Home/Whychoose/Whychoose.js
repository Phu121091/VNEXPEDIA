import React from 'react';
import WhychooseDefault from './Whychoose.style';
import './Whychoose.css';
import Video1 from '../../../data/video/1.mp4';
import Video2 from '../../../data/video/1.mp4';

const Whychoose = () => {
  return (
    <div class="banner">
      <video
        src={Video2}
        width="900"
        height="500"
        loop
        autoPlay
        muted
      ></video>
      <div class="noi_dung">
        <h2>Let's Visit Vietnam</h2>
        <p>
          We have the ultimate travel and tour leading company based around the
          world. We are experts in the extraordinary with a worldwide portfolio.
          Inspiring memorable holidays with skilled and Firt Aid certifiled
          guides for over 20 years. We always ensure you are happy, assisted,
          and safe during your tour.
        </p>
      </div>
      <div class="video-bg">
        <video
          src={Video1}
          width="900"
          height="500"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};

export default Whychoose;
