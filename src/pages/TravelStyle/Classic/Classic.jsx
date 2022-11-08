import React from "react";
import "./Classic.css";
import SimpleSlider from "./../../../components/Slider/Slider"

const Classic = () => {
  return (
    <div className="body-classic">
      <div className="banner-picture">
        <div className="title-classic">Classic</div>
        <div className="detail-classic"> Việt Nam - Timeless Charm </div>
      </div>
      <div className="are-main">
        <div className="page-up">
          <div className="up">
            <div className="classic-detail">
              Charming beaches, breathtaking scenery, outstanding caves, golden
              terraced rice fields, rich history, cultural diversity, delicious
              and healthy cuisine.
            </div>
            <div className="classic-title">Travel-Style-Classic</div>
            <div className="classic-bottom">
              Vietnam is a country situating on the Indochina Peninsula in
              Southeast Asia where is the home to many fantastic destinations
              for travellers to come and explore. With a long coastline of 3,260
              km stretching from the North to the South, the S-shaped country is
              praised with the vast beauty of natural landscapes, diverse
              culture, heart-warming locals, and awesome gastronomy.
            </div>
          </div>
        </div>
        <div className="simpletour-1">
          <SimpleSlider/>
        </div>
      </div>
    </div>
  );
};

export default Classic;
