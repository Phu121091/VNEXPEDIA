import React from 'react';
import { useEffect,useState,useContext } from 'react';
import { UserContext } from '../../components/HeadFoot';
import {BiSearchAlt} from "react-icons/bi";
import './search.css';

const SearchC = () => {
  const [hover, setHover] = useState(['on','off','off','off']);
  const [local1,setlocal1]= useState();
  const [cost1,setcost1] = useState();
  
  const [inputvalue,setinputvalue] = useState();
  console.log(inputvalue);
  
  const filerObj = useContext(UserContext);
  const setfil = () =>{
    filerObj.setfilter({hover,local1,cost1,inputvalue});
    
  } 

  return (
    <div className='search-component'>
      <div className='search-1'>
        <button onClick={()=>setHover(['on','off','off','off'])} className={hover[0]}>Nhà đất bán</button>
        <button onClick={()=>setHover(['off','on','off','off'])} className={hover[1]}>Nhà đất cho thuê</button>
        <button onClick={()=>setHover(['off','off','on','off'])} className={hover[2]}>Dự án</button>
        <button onClick={()=>setHover(['off','off','off','on'])} className={hover[3]}>Tin tức</button>
      </div>
      <div className='search-2'>
        <div className='search-2-input'>
        <input type="text" placeholder='Bạn cần tìm gì' onChange={(event)=>setinputvalue(event.target.value)}/>
        <div className='search-2-icon' onClick={()=>setfil()}>
        <BiSearchAlt/>Tim kiem
        </div>
        </div>

        { hover[0]=='on' ? 
        (<div className='div-select'>
          <select onChange={(event)=>setlocal1(event.target.value)}>
            <option value="All">Toàn quốc</option>
            <option value="hochiminh">Hồ Chí Minh</option>
            <option value="hanoi">Hà Nội</option>
            <option value="danang">Đà Nẵng</option>
            <option value="dongnai">Đồng Nai</option>
            <option value="cantho">Cần Thơ</option>
            <option value="binhduong">Bình Dương</option>
            <option value="longan">Long An</option>
          </select>
          <select onChange={(event)=>setcost1(event.target.value)}>
            <option value="All">Tất cả</option>
            <option value="0-1">Dưới 1 tỉ</option>
            <option value="1-2">1 tỉ - 2 tỉ</option>
            <option value="2">Trên 2 tỉ</option>
          </select>
         </div>):"" }

         { hover[1]=='on' ? 
        (<div className='div-select'>
          <select onChange={(event)=>setlocal1(event.target.value)}>
            <option value="All">Toàn quốc</option>
            <option value="hochiminh">Hồ Chí Minh</option>
            <option value="khanhhoa">Khánh Hòa</option>
            <option value="cantho">Cần Thơ</option>
          </select>
          <select onChange={(event)=>setcost1(event.target.value)}>
            <option value="All">Tất cả</option>
            <option value="0-5">Dưới 5 triệu</option>
            <option value="5-20">5 triệu - 20 triệu</option>
            <option value="20">Trên 20 triệu</option>
          </select>
         </div>):"" }

         { hover[2]=='on' ? 
        (<div className='div-select'>
          <select >
            <option value="All">Toàn quốc</option>
            <option value="mienbac">Miềm bắc</option>
            <option value="miennam">Miền nam</option>
          </select>
          <select >
            <option value="now">Đã mở bán</option>
            <option value="yet">Sắp mở bán</option>
            <option value="used">Đã bàn giao</option>
          </select>
         </div>):"" }

      </div>
    </div>
  )
}

export default SearchC