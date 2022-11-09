import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Slider.css";

const SimpleSlider = () => {
  // var settings = {
  //   dots: false,
  //   autoplay: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="main-slide">
      






      <div className="slide-are">
        <div className="slider-left">
          {/* <Slider {...settings}>
            <div className="slide s1">aaaaa</div>
            <div className="slide s2">bbbbb</div>
            <div className="slide s3">ccccc</div>
            <div className="slide s4">ddddd</div>
            <div className="slide s5">eeeee</div>
            <div className="slide s6">fffff</div>
          </Slider> */}
        </div>
        <div className="slide-content">Title</div>
      </div>
      <div className="slide-are">
        <div className="slider-right">
          {/* <Slider {...settings}>
            <div className="slide s1">aaaaa</div>
            <div className="slide s2">bbbbb</div>
            <div className="slide s3">ccccc</div>
            <div className="slide s4">ddddd</div>
            <div className="slide s5">eeeee</div>
            <div className="slide s6">fffff</div>
          </Slider> */}
        </div>
      </div>
      
      <div className="text-end">
        

      </div>
    </div>
  );
};
export default SimpleSlider;
