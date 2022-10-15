import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './home.css';
import { useEffect,useState,useContext } from 'react';
import axios from "axios";
import Sellitem from '../../components/Sellitem';


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

  const [sellList, setSellList] = useState([]);
  const [rentList, setRentList] = useState([]);

  const callApi =async()=>{
     const response = await axios({
         method: 'get',
         url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
         type: 'json'
     });

     if(response.status === 200){
         setRentList(response.data.filter(d => (d.sale_or_rent =='rent')&&(d.status==true)).slice(0,4))
     }
     console.log(rentList);        
 }

 const callApi2 =async()=>{

   const response = await axios({
       method: 'get',
       url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
       type: 'json'
   });

   if(response.status === 200){
       setSellList(response.data.filter(d => (d.sale_or_rent =='sale')&&(d.status==true)).slice(0,4))
   }
   console.log(sellList);   
}

 useEffect(()=>{
     callApi();    
     callApi2();
 },[]);

  return (
    <div> 

        {/* <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index} style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              
            ))}
          </Slide>
        </div> */}
        <div className='homeimg'>
        <img src='https://3.bp.blogspot.com/-kSj9PONtYRI/XEHlnijcneI/AAAAAAAACVM/3gsuz1B8ArQLT7MQf1vZI4aoHwZ-3r82ACLcBGAs/s1600/ezgif-4-d6509b430588.gif'></img>
        </div>
      <div className='homelist'>
        <h3>Nhà đất bán</h3>
        <div className='homemainlist'>
        { sellList.length >0 ? 
       
       (sellList.map((item,index) => (
      <Sellitem item={item}/>
       )))
     
  
    : (<h5>List empty</h5>)}
    </div>
      </div>

      <div className='homelist'>
        <h3>Nhà đất cho thuê</h3>
        <div className='homemainlist'>
        { rentList.length >0 ? 
       
       (rentList.map((item,index) => (
      <Sellitem item={item}/>
       )))
     
  
    : (<h5>List empty</h5>)}
    </div>
      </div>
    </div>
  )
}

export default Home