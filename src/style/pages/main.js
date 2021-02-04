import styled from "styled-components";
import color from '../colors'

const S = {};


S.Main = styled.main`
.main__banner{
  width: 994px;
  height:253.71px;
  background-color: #eee;
  margin:0 auto;
  margin-top:60px;
  border-radius:15px;
  display:flex;
  justify-content:space-between;
  h1{
    color: #333333;
    font-weight:400;
    font-size:31.63px;
    line-height:40,55px;
    padding:40.77px 0 0 40.77px;
    margin:0;

  }
  p{
    font-family: TT Norms Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #828282;
    padding:0 0 0 40.77px;
    margin:0;
  }
  button{
    height: 52.55424118041992px;
    width: 217.4658203125px;
    border-radius: 4.518181800842285px;
    margin:31.77px 0 0 41.77px;
    background: #00AC4E;
    color:white;
    border:none;
    outline:none;

  }
}
.main__banner2{
  width: 994px;
  height:253.71px;
  background-color: #eee;
  margin:60px auto;
  border-radius:15px;
  display:flex;
  justify-content:space-between;
  h1{
    color: #333333;
    font-weight:400;
    font-size:31.63px;
    line-height:40,55px;
    padding:40.77px 0 0 40.77px;
    margin:0;

  }
  button{
    height: 52.55424118041992px;
    width: 217.4658203125px;
    border-radius: 4.518181800842285px;
    margin:31.77px 0 0 41.77px;
    background: #00AC4E;
    color:white;
    border:none;
    outline:none;

  }
}
.main__products{
  
  .main__products__list{
    width:994px;
    margin:40px auto;
    display:flex;
    flex-wrap:wrap; 
    justify-content:space-between;
    .pagination{
      margin-left:326px;
    }
  }
  .main__products__title{
    width:994px;
    height:20px;
    display:flex;
    padding:20px 0;
    margin:auto;
    h3{
      font-family: TT Norms Pro;
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

}

.main__title{
  width: 994px;
  height:28px;
  display:flex;
  margin:0 auto;
  justify-content:space-between;
  h2{
    font-family: TT Hoves;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #4F4F4F;
  }
  .video__banner{
    width:1440px;
    height:648px;
  }
}
`;
export default S;