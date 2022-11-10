import React from 'react'
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import './style.css';
 
const TourItemlist = ({status}) => {


  return (
    <div className={`simpletour-1 ${status}`}>
          <div className='top-container'>
            <div className="box-1"></div>
            <div className="boxsub-1">
              <div className="title-box">HA LONG 4 DAY - 3 NIGHT</div>
              <div className="title-highlight">
                <ul className="highlight">
                  <li>
                    {" "}
                    Taste Hanoi beer and experience the Vietnamese beer drinking
                    cultur{" "}
                  </li>
                  <li>
                    Take in a cooking demonstration with the chef to learn about
                    Vietnamese food, while floating through Halong Bay{" "}
                  </li>
                  <li>
                    {" "}
                    Explore the Imperial Citadel, a UNESCO-designated World
                    Heritage Site, and sample Hue cuisine for its authentic and
                    recognizable flavor{" "}
                  </li>
                  <li>
                    {" "}
                    Try the food at the busiest street booths and secret
                    passageways in Hoi An Town in true native fashion while
                    riding a motorcycle.{" "}
                  </li>
                  <li>
                    {" "}
                    Experience the vast Mekong Delta's rural villages, farming
                    practices, and fruit orchards by boat through its winding
                    canals while sampling local delicacies.
                  </li>
                </ul>
              </div>
              <div className="read-more">
                <div className="icon-show">
                  <div className="money">
                    <RiMoneyDollarCircleLine /> FROM 1054${" "}
                  </div>
                  <div className="day-lenght">
                    <Ri24HoursFill /> 12 Day
                  </div>
                </div>
                <div className="button-show">
                  <a href="/"> Show more..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TourItemlist