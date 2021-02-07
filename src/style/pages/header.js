import styled from "styled-components";
import color from '../colors'

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
      img{
        cursor:pointer;
      }
  }
  .header__nav {
     
      width:433px;
      height:33px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      list-style-type:none;
      font-weight: 500;
  .header__link{
    cursor:pointer;
    text-decoration: none;
    color:#333333;

  }
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
  .phone{
    width:17px;
    height:17px;
    color:${color.mainGreen};
    cursor:pointer;
  }
  .user,.shoppingCart{
    width: 31px;
    height:31px;
    color:${color.mainGreen};
    cursor:pointer;
  }
  @media screen and (max-width:1024px){
    nav{
      width:900px;
      height:90px;
      font-size: 16px;
      line-height: 19px;
      margin:0 auto;
    }
    .header__num{
      width:160px;
      margin-right:30px;
    }
    .user,.shoppingCart{
      width: 29px;
      height:29px;
    }
    .header__nav {
      width:403px;
    }
  
  }
  @media screen and (max-width:768px){
    nav{
      width:700px;
      height:70px;
      font-size: 12px;
      line-height: 12px;
      margin:0 auto;
    }
    .header__num{
      width:130px;
      margin-right:20px;
    }
    .user,.shoppingCart{
      width: 18px;
      height:18px;
    }
    .header__sign{
      width:50px;
    }
    .header__nav {
      width:350px;
      padding:0 10px;
    }
  
  }
  @media screen and (max-width:425px){
    nav{
      width:375px;
      height:60px;
      font-size: 12px;
      line-height: 12px;
      margin:0 auto;
    }
    .header__num{
      display:none;
    }
    .user,.shoppingCart{
      width: 14px;
      height:14px;
    }
    .header__sign{
      width:40px;
    }
    .header__nav {
      width:300px;
      padding:0 10px;
    }
  
  }

`;

export default S;
