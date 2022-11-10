import React from 'react';
import { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import './Feedback.css'

function Feedback() {

    const [feed, setFeed] = useState(1);

    const handlerFeedNext = () => {
        if(feed === 3) {
            setFeed(1)
        } else {
            setFeed(feed + 1)
        }
    }

    const handlerFeedPrev = () => {
        if(feed === 1) {
            setFeed(3)
        } else {
            setFeed(feed - 1)
        }
    }

    return ( 
        <div className="feedback">
            <h2 className='feedback-title'>Client Feedback</h2>
            <div className='feedback-cont'>
                { feed === 1 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg" alt="" />
                        <div className="feedback-content">
                            <div className="cus-content">Hi cac ban, day la danh gia cua khach hang!!!jdgkdjfgshufhsgusrstugdfghjdsgjsdfgh dfghdughgdhgddsgkfkjdfsglkfhgjjfgjkfldjgklkdfjkghdlgjdfjglksflhdjkf hjdfgjdklsgjkdfgjdfgjkdlsfgsdjghdfjg l dsjgjfkdgfhgkdfsjghugh  dsghjsghsgjdh fjghfjkdghdgfhdfsdlfskjgyuerjkkreu438ierytjgj ret3748f wt wreu348j erteerjj jdgkdjfgshufhsgusrstugdfghjdsgjsdfghdfghdughgdhgddsgkfkjdfsglkfhgjjfgjkfldjgklkdfjkghdlgjdfjglksflhdjkf hjdfgjdklsgjkdfgjdfgjkdlsfgsdjghdfjg l dsjgjfkdgfhgkdfsjghugh  dsghjsghsgjdh fjghfjkdghdgfhdfsdlfskjgyuerjkkreu438ierytjgj ret3748f wt wreu348j erteerjj</div>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Test</p>
                        </div>
                    </div>
                </div>}
                { feed === 2 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Hi cac ban</p>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Test feedback</p>
                        </div>
                    </div>
                </div>}
                { feed === 3 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Day la danh gia ve cong ty va chuyen di</p>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Feedback</p>
                        </div>
                    </div>
                </div>}
            </div>
            <div className='arrow'>
                <button className="left-arrow" id="left" onClick={handlerFeedPrev}>
                    <BsArrowDown />
                </button>
                <button className="right-arrow" id="right" onClick={handlerFeedNext}>
                    <BsArrowDown />
                </button>
            </div>
        </div>
     );
}

export default Feedback;
