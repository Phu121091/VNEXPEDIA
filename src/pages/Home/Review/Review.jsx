import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Review.css';

const Review = () => {
   
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
    }

  return (
    <div className='review'>
        <h1>Review</h1>
    <Carousel effect="fade" autoplay duration='2s' className='slide-review-container'>
    <div>
      <div style={contentStyle} className='slide-review sr1'>
      <p>"_Nhiều điểm đến thú vị_"</p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='slide-review sr2'>
      <p>"_Thủ tục nhanh chóng_"</p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='slide-review sr3'>
      <p>"_Hướng dẫn viên quá xinh_"</p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='slide-review sr4'>
      <p>"_Xếp lịch nhanh quá trời_"</p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='slide-review sr5'>
      <p>"_Vé rê quá trời_"</p>
      </div>
    </div>
  </Carousel>
    </div>
  )
}

export default Review