import React from 'react';
import Contactitem from './Contactitem';
import ContactBoss from './Contactboss';

const ContactList = [
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/07/29/20220729165744-bd0a_wm.jpg",
    name:"Công ty cổ phần đầu tư bất động sản T&T",
    address:"Tầng 7 Toà nhà Big Win - Số 110 Khuất Duy Tiến, Thanh Xuân, Hà Nội",
    phone:'0339905879',
    local:['Bán căn hộ chung cư ở Quận 7, Hồ Chí Minh',
           'Bán căn hộ chung cư ở Quận 9, Hồ Chí Minh',
           'Cho thuê căn hộ chung cư ở Quận 7, Hồ Chí Minh',
           'Cho thuê căn hộ chung cư ở Quận 9, Hồ Chí Minh'],
    links:'https://batdongsan.com.vn/ban-nha-rieng/cong-ty-co-phan-dau-tu-bat-dong-san-t-t-eb2962'   
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/07/29/wyRdB1q5/20220729142227-a3d3.jpg",
    name:"Công ty TNHH bất động sản BBLand",
    address:"101 Bưng Ông Thoàn, Phú Hữu, Quận 9, Hồ Chí Minh, Việt Nam",
    phone:'0931561899',
    local:['Bán căn hộ chung cư ở Quận 7, Hồ Chí Minh',
           'Cho thuê căn hộ chung cư ở Quận 7, Hồ Chí Minh'],
    link:'https://batdongsan.com.vn/ban-can-ho-chung-cu/cong-ty-tnhh-bat-dong-san-bidiland-eb2960'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/07/07/wyRdB1q5/20220707161748-a9b1.jpg",
    name:"Công ty Bất động sản tử tế",
    address:"32 Đường B8, Khu vực 11, KDC Hưng Phú, Phường Hưng Phú, Quận Cái Răng, Thành Phố Cần Thơ , Việt Nam",
    phone:'0932976634',
    local:['Bán đất nền dự án ở Cái Răng, Cần Thơ',
           'Bán nhà riêng ở Cái Răng, Cần Thơ'],
    link:'https://batdongsan.com.vn/ban-dat-nen-du-an/cong-ty-bat-dong-san-tu-te-eb2952'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/05/10/U8pqhXd9/20220510172109-4578.jpg",
    name:"Sàn giao dịch bất động sản Hồng Gia",
    address:"856 Tạ Quang Bửu, 5, Quận 8, Hồ Chí Minh, Việt Nam",
    phone:'0933888725',
    local:['Bán căn hộ chung cư ở Quận 8, Hồ Chí Minh',
           'Cho thuê căn hộ chung cư ở Quận 8, Hồ Chí Minh',
           'Cho thuê nhà mặt phố ở Quận 8, Hồ Chí Minh',
           'Cho thuê nhà biệt thự, liền kề ở Quận 8, Hồ Chí Minh'],
    link:'https://batdongsan.com.vn/ban-can-ho-chung-cu/san-giao-dich-bat-dong-san-hong-gia-eb2945'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/05/05/U8pqhXd9/20220505084756-d47b.jpg",
    name:"Công ty cổ phần môi giới bất động sản HELLOHOMES",
    address:"528 Nguyễn Văn Qúa, Khu Phố 4, Đông Hưng Thuận, Quận 12, Hồ Chí Minh, Việt Nam",
    phone:'0903673755',
    local:['Bán nhà riêng ở Quận 12, Hồ Chí Minh',
           'Bán nhà riêng ở Tân Bình, Hồ Chí Minh'],
    link:'https://batdongsan.com.vn/ban-nha-rieng/cong-ty-co-phan-moi-gioi-bat-dong-san-hellohomes-eb2944'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/04/28/wyRdB1q5/20220428134937-9d35.jpg",
    name:"Công ty TNHH đầu tư và phất triển đô thị REALTY INVEST",
    address:"63 Phan Đăng Lưu, Hòa Cường Bắc, Hải Châu, Đà Nẵng, Việt Nam",
    phone:'0825585595',
    local:['Bán đất nền dự án ở Hải Châu, Đà Nẵng',
           'Bán nhà mặt phố ở Điện Bàn, Quảng Nam'],
    link:'https://batdongsan.com.vn/ban-dat-nen-du-an/cong-ty-tnhh-dau-tu-va-phat-trien-do-thi-realty-invest-eb2943'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/03/31/U8pqhXd9/20220331164649-f071.jpg",
    name:"Công ty TNHH bất động sản MTP",
    address:"Nội Đồng, Đại Thịnh, Mê Linh, Hà Nội, Việt Nam",
    phone:'0941567111',
    local:['Bán đất nền dự án ở Vĩnh Yên, Vĩnh Phúc',
           'Bán đất ở Mê Linh, Hà Nội'],
    link:'https://batdongsan.com.vn/ban-dat-nen-du-an/cong-ty-tnhh-bat-dong-san-mtp-eb2942'
  },
  {
    logo:"https://file4.batdongsan.com.vn/resize/200x200/2022/03/29/wyRdB1q5/20220329120026-8234.jpg",
    name:"TNHH BDS Hoàng Thịnh Land",
    address:"B5 đường D4 Khu Dân cư HimLam, Phường Tân Hưng, Quận 7, Hồ Chí Minh, Việt Nam",
    phone:'0909568734',
    local:['Bán căn hộ chung cư ở Quận 8, Hồ Chí Minh',
           'Bán shophouse, nhà phố thương mại ở Quận 7, Hồ Chí Minh'],
    link:'https://batdongsan.com.vn/ban-can-ho-chung-cu/tnhh-bds-hoang-thinh-land-eb2941'
  },
]

const Contactboss = [
  {
   logo:'https://file4.batdongsan.com.vn/2022/09/22/20220922082714-312d_wm.jpg',
   name:'Công ty CP Tập đoàn Đất Nam'
  },
  {
    logo:'https://file4.batdongsan.com.vn/2022/09/16/20220916111749-9d3f_wm.jpg',
    name:'Công ty CP Golden City'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2022/09/13/20220913103506-7d7a_wm.jpg',
    name:'Công ty CP Fifa Investment'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2022/08/23/20220823155803-911b_wm.jpg',
    name:'Hoàng Phúc Land'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2022/02/14/20220214232805-eaef.jpg',
    name:'Công ty CP Đầu tư và Xây dựng Tây Hồ'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2020/08/31/iFRzAx0S/20200831102750-5358.jpg',
    name:'Công ty TNHH Thủy sinh 4U Việt Nam'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2020/09/28/PGsxuI1y/20200928152939-aa13.jpg',
    name:'Công ty TNHH Đầu tư và xây dựng Hoàng Thổ Group'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2022/09/27/20220927171302-b4b2_wm.jpg',
    name:'Công ty CP Dịch vụ địa ốc Hà Nội Starland'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2019/05/20/zk7ggeWN/20190520164019-5da7.jpg',
    name:'Công ty TNHH Bắc Chương Dương'
   },
   {
    logo:'https://file4.batdongsan.com.vn/2019/06/26/zk7ggeWN/20190626174121-947e.jpg',
    name:'Công ty CP Bất động sản Khang Long'
   }

]



const Contacts = () => {
  return (
    <div className='main-ct'>
      <div className='contact-nmg'>
      <h3>Danh bạ nhà môi giới</h3>
      <div>
      {ContactList.map((item)=>(
        <Contactitem item={item}/>
      ))}
      </div>
      </div>

      <div className='list-boss'>
        <h3>Chủ đầu tư</h3>
        <div className='main-list-boss'>
          {Contactboss.map((item)=>(
            <ContactBoss item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contacts