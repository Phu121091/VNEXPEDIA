import styled, { keyframes, css } from 'styled-components';

const mymove = keyframes`
0% {
  left: -20%;
}
100% {
  left: 0%;
}
`;
const AboutUsDefault = styled.div`
  .play{
      animation: ${mymove} ;
      animation-duration: 5s ;
      animation-fill-mode: forwards;
    }
  .aboutus {
    padding-bottom: 5%;
    padding-top: 5%;
	  
  }
  .aboutus h1 {
    padding-left: 17%;
    color: white;
    font-size: 160px;
    font-family: 'Shalimar', cursive;
    position: relative;
    left:0%;
    
  }
  
  .aboutus-contain {
    display: block;
    width: 40%;
    margin-left: 10%;
    background-color: rgb(247, 242, 233);
    padding: 20px;
  }
  .aboutus-border {
    border: dashed rgb(101, 48, 48);
    border-width: 5px;
    height: 300px;
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
  }
  .aboutus-border p {
    word-wrap: break-word;
    text-align: center;
  }
  .hr1 {
    margin-left: 10%;
    width: 40%;
    border : 1px solid white;
    margin-bottom: 2%;
    color:white;
    opacity:1;
  }
  .hr2 {
    margin-right: 10%;
    margin-top: 2%;
    border : 1px solid white;
    color:white;
    opacity:1;
  }
`;

export default AboutUsDefault;
