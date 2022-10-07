import React from 'react';
import { useEffect,useState,useContext } from 'react';
import axios from "axios";
import Sellitem from '../../components/Sellitem';
import { UserContext } from '../../components/HeadFoot';
import './style.css';

const User = () => {
    
    const user = useContext(UserContext);
    const token = user.username.token;
     
    const [listr,setListr]=useState(1);
   
    const [allList, setallList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'get',
             url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
             type: 'json'
         });
 
         if(response.status === 200){
             setallList(response.data)
         }
         
         setIsLoading(false);     
     }
 
     useEffect(()=>{
         callApi();    
         
     },[]);
     

     const approve = async(item) => {
        
        
            const response = await axios({
              method: 'PUT',
              url: `https://server-real-estate.herokuapp.com/api/v1/posts/${item._id}`,
              data: {'status':true},        
              headers: {
                'Authorization': `Bear ${token}` 
              }
          });
  
          callApi();
     }

     const del = async(item) => {
            const response = await axios({
              method: 'delete',
              url: `https://server-real-estate.herokuapp.com/api/v1/posts/${item._id}`,
            headers: {
                'Authorization': `Bear ${token}` 
              }
          });
          callApi();
     }

  return (
    <div>
    {user.username.admin? 
    <div className='mainadmin'>
      <div >
      <button onClick={()=>setListr(1)}>Duyệt bài</button>
      <button onClick={()=>setListr(2)}>Xóa bài</button>
      </div>
      {listr == 1?

      <div className='notrender'>
        <h3>Bài chờ duyệt</h3>
        {allList.length>0? 
        (allList.filter(d=>d.status==false).map((item,index) => (
            <div className='itemadmin'>
            <Sellitem item={item}/>
            <button onClick={()=>approve(item)}>Duyệt</button>
            <button onClick={()=>del(item)}>Xóa</button>
            </div>
             )))
          : (<h5>List empty</h5>)}
      </div> 
      :
      <div className='rendered'>
        <h3>Bài đã duyệt</h3>
        {allList.length>0? 
        (allList.filter(d=>d.status==true).map((item,index) => (
            <div className='itemadmin'>
            <Sellitem item={item}/>
            <button onClick={()=>del(item)}>Xóa</button>
            </div>
             )))
          : (<h5>List empty</h5>)}
      </div> }
    </div> :
    <div>
      <h3>Bài viết quan tâm</h3>
    </div>}
    </div>
  )
}

export default User