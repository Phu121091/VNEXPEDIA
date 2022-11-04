import styled from 'styled-components';

const WhychooseDefault = styled.div`
  text-align: center;
  font-size: xxx-large;
  height: auto;
  padding-bottom: 2%;
  margin-top: 13px;
  background-color: white;

  .video1 {
    width: 37%;
    float: right;
    margin-right: 208px;
    margin-top: 20px;
  }
  .text {
    width: 50%;

    .title {
      font-family: 'Shalimar', cursive;
      font-size: 120px;
    }
    .text-contain {
      display: flex;
      justify-content: space-evenly;
      padding-right: 7%;
      padding-left: 7%;

      .content {
        color: black;
        height: auto;
        width: 260px;
        border: solid 1px black;
        border-radius: 20px;
        font-family: cursive;
        font-size: x-large;
        overflow-wrap: break-word;
        padding: 2%;
      }
    }
  }
`;

export default WhychooseDefault;
