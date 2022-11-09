import React from 'react';
import { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import './Feedback.css'



const handlerFeed = () => {
    const slides = document.querySelectorAll('.outstanding-feedback')
    const leftBtn = document.getElementById('left')
    const rightBtn = document.getElementById('right')

    let activeSlide = 0

    rightBtn.addEventListener('click', () => {
        activeSlide++

        if(activeSlide > slides.length - 1) {
            activeSlide = 0
        }

        setActiveSlide()
    })

    leftBtn.addEventListener('click', ()  => {
        activeSlide--

        if(activeSlide < 0) {
            activeSlide = slides.length - 1
        }

        setActiveSlide()
    })

    function setActiveSlide() {
        slides.forEach((slide) => slide.classList.remove('active'))

        slides[activeSlide].classList.add('active')
    }
}

function Feedback() {

    const [useFeed, setUseFeed] = useState(1);

    return ( 
        <div className="feedback">
            <h2 className='feedback-title'>Client Feedback</h2>
            <div className='feedback-cont'>
                <div className="outstanding-feedback active">
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
                </div>
                <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Hi cac ban</p>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
                        <div className="feedback-content">
                            <p className="cus-content">Feedback</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="arrow left-arrow" id="left">
                <BsArrowDown />
            </button>

            <button className="arrow right-arrow" id="right">
                <BsArrowDown />
            </button>
        </div>
     );
}

export default Feedback;
