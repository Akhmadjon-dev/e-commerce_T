import styled from "styled-components";

const S = {};

S.Header = styled.div`
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
nav{
  width: 994px;
  height: 100px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size: 18px;
  line-height: 21px;
  margin:0 auto;
  
}
 
  .header__logo{
      width:111px;
      height:31.22px;
      display:flex;
      justify-content:space-between;
      align-items:center;
  }
  .header__nav {
      width:433px;
      height:33px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      list-style-type:none;
      font-weight: 500;
      color:#333333;
  
  }
  .header__num{
    width:181px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:60px;
  }
  .header__num p{
    font-weight: 500;
    color:#000000;
  }
  .header__sign{
      width:93px;
      height:31px;
      display:flex;
      justify-content:space-between;
      align-items:center;

  }
`;

export default S;
