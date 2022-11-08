import { BsArrowDown, BsFacebook } from 'react-icons/bs';
import './TravelInfo.css'

function TravelInfo() {
    return ( <div className="wrapper">
        <div className="banner-info">
            <h1 className='banner-title'>DISCOVER THE HIGHLIGHTS OF VIETNAM</h1>
            <p className='banner-security'>Private & Tailored Tour</p>
            <p className='banner-price'>FROM <b>UD$1111</b> PP</p>
            <button className='banner-options'>CHOOSE BUDGET & ENQUIRY NOW</button>
            <div className="banner-time">
                <div>
                    <span>COUNTRY</span>
                    <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>1</span>
                </div>
                <div>
                    <span>DISTINATIONS</span>
                    <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>7</span>
                </div>
                <div>
                    <span>DAYS</span>
                    <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>12</span>
                </div>
            </div>
            <BsArrowDown className='banner-arrow'/>
        </div>
        <div className="travel-address">
            <div className='travel-intro'>
                <span className='travel-title'>VietNam - The Land of Timeless Charm</span>
                <img src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
            </div>
            <div className="travel-local">
                <div className='local-list'>    
                    <a href="#!" target="_blank" rel="noopener noreferrer">HA NOI</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">SAPA</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HALONG BAY</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HUE</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HOI AN</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HO CHI MINH</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">MEKONG</a>
                </div>
                <div className="local-slide">
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="local-tooltip">
                    <a href="#!" title="Swimming" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Swimming<i></i></span>
                    </a> 
                    <a href="#!" title="Cruising" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Cruising<i></i></span>
                    </a> 
                    <a href="#!" title="Boating" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Boating<i></i></span>
                        </a> 
                    <a href="#!" title="Cultural" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Cultural<i></i></span>
                        </a> 
                    <a href="#!" title="Heritage" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Heritage<i></i></span>
                    </a>
                    <a href="#!" title="Nature" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Nature<i></i></span>
                    </a> 
                    <a href="#!" title="Cuisine" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Cuisine<i></i></span>
                    </a> 
                    <a href="#!" title="Kayaking" className="icon-tooltip">
                        <BsFacebook className='icon-font' />
                        <span>Kayaking<i></i></span>
                    </a>
                </div>
                <p className="paragraph">Vietnam - Our country which is located in in the East of Indochinese Peninsula is furthering its case as natural and cultural destination, not just a stopover to the beach. 
                    Trekking in Sapa Town to the ethnic villages Lao Chai - Ta Van - Giang Ta Chai, Kayaking in the magnificent Halong Bay, Learning the history of Hue Old Citadel, 
                    Interacting with friendly local people in floating Mekong Delta will absolutely highlight your holiday in our beautiful country. 
                    And if you still fall in love with the beach, hop on the fresh air and stunning beaches in Hoi An in the Central of Vietnam, you will love the sunshine and the waves in the wonderful atmosphere of peaceful town.
                </p>
                <h2 className="inclusions-line">Inclusions of this tour</h2>
            </div>
        </div>

    </div> );
}

export default TravelInfo;