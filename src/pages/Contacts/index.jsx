import React from 'react';
import Contactitem from './Contactitem';

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

const Contacts = () => {
  return (
    <div>
      {ContactList.map((item)=>(
        <Contactitem item={item}></Contactitem>
      ))}
    </div>
  )
}

export default Contacts