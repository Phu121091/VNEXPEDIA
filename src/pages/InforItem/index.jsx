import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './infor.css';
import GoogleMapComponent from '../../components/GoogleMap/GoogleMap';

const InforItem = () => {
    const [itemcall, setitemcall] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const paramss = useParams();
    const [itemlq,setitemlq] = useState([]);

    const callApi =async()=>{
        setIsLoading(true);
 
        const response = await axios({
            method: 'get',
            url: `https://server-real-estate.herokuapp.com/api/v1/posts/${paramss.id}`,
            type: 'json'
        });

        if(response.status === 200){
            setitemcall(response.data)
        }
        
        setIsLoading(false); 
        
 
}
const calllq =async()=>{
     
    const response = await axios({
        method: 'get',
        url: `https://server-real-estate.herokuapp.com/api/v1//posts/relate?caterogies=${itemcall[0].categories}`,
        type: 'json'
    });

    if(response.status === 200){
        setitemlq(response.data);
    }
    
  
}

    useEffect(()=>{
        callApi();    
        if (itemcall.length>0) calllq();
        console.log(itemcall);
    },[]);
    console.log(itemlq);
    


  return (
           
        <div>
            {itemcall.length>0 ? 
            <div>
                <div className='main-infor'>
                <Slide className='slide-img-item' >
                {itemcall[0].gallery.map((slideImage, index)=> (
                    <div className="item-slide" key={index} style={{'backgroundImage': `url(${slideImage})`}}>
                        <span>{index+1}</span>
                        </div>
                    
                    ))}
                </Slide>
                <div className='list-image'>
                    { itemcall[0].gallery.map((item)=>(
                        <img src={item}></img>
                    ))}
                </div>
                <h3>{itemcall[0].title}</h3>
                <p>Địa chỉ : {itemcall[0].address}</p> 
                <p>Mức giá : {itemcall[0].price}</p>
                <p>Diện tích : {itemcall[0].area}</p>
                <h5>Thông tin mô tả</h5>
                <p>{itemcall[0].description}</p>
                <h5>Đặc điểm bất động sản</h5>
                <p>Phân loại : {itemcall[0].categories}</p>
                <div>
                    <h5>Xem trên bẩn đồ</h5>
                    <GoogleMapComponent location={itemcall[0].location}></GoogleMapComponent>
                </div>

            </div>
            <div className='connect-infor'>
                <h3>Bài viết liên quan</h3>
            </div>
            </div> : 
            <div></div>}

            
        </div>
    )
}

export default InforItem