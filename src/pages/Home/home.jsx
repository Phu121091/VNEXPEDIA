import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './home.css';

const slideImages = [
    {
      url: 'https://datxanhdiaoc.com/wp-content/uploads/2017/10/banner-saigon-riverside-city-datxanhdiaoc-chuan.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://th.bing.com/th/id/R.5e08f790717577cd56f8472054ddc229?rik=1ECcOJaKULOTcQ&riu=http%3a%2f%2fblogthumb.pstatic.net%2fMjAxOTExMjJfMTcz%2fMDAxNTc0NDA3MTI5Mzc3.x9Pxg6IKO9jsLmH0fRJzB4ykLYHAib8sZNo8nBTfwDgg.HVnlcAh7JgpqQFNPypm_slbJcuVHbKocFFSE5nkh00og.PNG.iloveu2904%2fimage.png%3ftype%3dw2&ehk=c3MevKYYTmuiDFUCstfJr05UEVN0N08UtF1y9pYwu3Y%3d&risl=&pid=ImgRaw&r=0',
      caption: 'Slide 2'
    },
    {
      url: 'https://dangxuanbao.com/wp-content/uploads/2018/03/Phoi-canh-tong-the-Q7-saigon-riverside-complex-1.jpg',
      caption: 'Slide 3'
    },
  ];
  
  
const Home = () => {
  return (
    <div> 

        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index} style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              
            ))}
          </Slide>
        </div>


    </div>
  )
}

export default Home