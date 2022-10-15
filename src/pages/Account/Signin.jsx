import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Signin = () => {
  
  const navigate = useNavigate();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const [pass2,setPass2] = useState();
  const [ok,setOk] = useState();

  const handleSignin = (e) => {
    e.preventDefault();
    if((name==''||name==undefined)||(email==''||email==undefined)||(pass==''||pass==undefined)||(pass2==''||pass2==undefined)) {
      toast.error('Hãy nhập đầy đủ thông tin');
      return;
    } else {
      if (pass!==pass2) {
        toast.error('Mật khẩu xác nhận không đúng');
        return;
      }
     else {

    const newUser = {
      'userName': `${name}`,
      'email':`${email}`,
      'password':`${pass}`
    }

    const call = async()=>{
      const response = await axios({
        method: 'post',
        url: 'https://server-real-estate.herokuapp.com/api/v1/users/register',
        data: newUser,
        type:'json'
    });
     console.log(response.status);
    
     if (response.status==200) {
      toast.success('Tạo tài khoản thành công');
      navigate("/log-in", { replace: true });
    }
     else {
      toast.error('Tài khoản đã tồn tại');
      return;
     };
   }
    
   call();
  }
  }
  }



  return (
    <div className='signin-container'>
        <h3>Đăng kí tài khoản</h3>
        <form className='signin' onSubmit={(e)=>handleSignin(e)}>
            <input type='text' placeholder='Tên đăng nhập' onChange={(event) => setName(event.target.value)}></input>
            <input type='text' placeholder='Địa chỉ email' onChange={(event) => setEmail(event.target.value)} ></input>
            <input type='password' placeholder='Mật khẩu' onChange={(event) => setPass(event.target.value)} ></input>
            <input type='password' placeholder='Nhập lại mật khẩu' onChange={(event) => setPass2(event.target.value)} ></input>
            <span><input type='checkbox' onChange={(event) => setOk(event.target.value)} ></input> Tôi đồng ý với các điều khoản, điều kiện , chính sách của Greenhouse</span><br/>
            <button type='submit'>Đăng kí</button>
            <div>Đã là thành viên? <Link to='/Dangnhap'>Đăng nhập</Link> tại đây</div>

        </form>
    </div>
  )
}

export default Signin