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
    padding:15px 0;
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
  margin:20px auto;
  justify-content:space-between;
  align-items:center;
  .bigger{
    font-size: 28px;
    color:${color.mainGreen}
  }
  .link_active{
    padding:10px;
    background-color:${color.mainGreen}
  }
  .link{
    text-decoration:none;
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
@media screen and (max-width:1024px){
  .main__title{
    width: 900px;
    height:20px;
    .link{
      font-size: 16px;
      font-weight: 300;
      line-height: 22px;
    }
    .bigger{
      font-size: 23px;
    }
  }
  .main__banner{
    width:900px;
    height:200px;
    h1{
      font-weight:300;
      font-size:25px;
      line-height:35px;
      padding:35px 0 0 35px;
    }
    p{
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
      padding:0 0 0 35px;
    }
    button{
      height: 45px;
      width: 200px;
      border-radius: 3px;
      margin:25px 0 0 35px;  
    }
  }
  .main__banner_img img{
    width:300px;
    height:200px;
    border-radius:0 15px 15px 0;
  }
  .main__products{
    .main__products__list{
      width:900px;
      margin:30px auto;
    }
    .main__products__title{
      width:900px;
      height:15px;
      padding:10px 0;
      margin:auto;
      h3{
        font-size: 20px;
        font-weight: 400;
        line-height: 15px;
      }
    }
  }
  .video__banner img{
    width:1024px;
    height:448px;
  }
  .main__banner2{
    width:900px;
    height:200px;
    h1{
      font-weight:300;
      font-size:25px;
      line-height:35px;
      padding:35px 0 0 35px;
    }
    button{
      height: 45px;
      width: 200px;
      border-radius: 3px;
      margin:25px 0 0 35px;  
    }
  }
}
@media screen and (max-width:768px){
  .main__title{
    width: 700px;
    height:20px;
    .link{
      font-size: 12px;
      font-weight: 200;
      line-height: 28px;
    }
    .bigger{
      font-size: 18px;
    }
  }
  .main__banner{
    width:700px;
    height:150px;
    h1{
      font-weight:200;
      font-size:20px;
      line-height:25px;
      padding:25px 0 0 25px;
    }
    p{
      font-size: 12px;
      font-weight: 200;
      line-height: 15px;
      padding:10px 0 0 25px;
    }
    button{
      height: 35px;
      width: 150px;
      border-radius: 3px;
      margin:15px 0 0 25px;  
    }
  }
  .main__banner_img img{
    width:200px;
    height:150px;
    border-radius:0 15px 15px 0;
  }
  .main__products{
    .main__products__list{
      width:700px;
      margin:20px auto;
    }
    .main__products__title{
      width:700px;
      height:15px;
      padding:10px 0;
      margin:auto;
      h3{
        font-size: 18px;
        font-weight: 300;
        line-height: 15px;
      }
    }
  }
  .video__banner img{
    width:768px;
    height:290px;
  }
  .main__banner2{
    width:700px;
    height:150px;
    h1{
      font-weight:200;
      font-size:20px;
      line-height:25px;
      padding:25px 0 0 25px;
    }
    button{
      height: 35px;
      width: 150px;
      border-radius: 3px;
      margin:15px 0 0 25px;  
    }
  }
}
@media screen and (max-width:425px){
  .main__title{
    width: 375px;
    height:20px;
    .link{
      font-size: 10px;
      font-weight: 200;
      line-height: 24px;
    }
    .bigger{
      font-size: 20px;
    }
  }
  .main__banner{
    width:425px;
    height:100px;
    border-radius:10px 0 0 10px;
    h1{
      font-weight:200;
      font-size:15px;
      line-height:20px;
      padding:15px 0 0 15px;
    }
    p{
      font-size: 12px;
      font-weight: 200;
      line-height: 15px;
      padding:5px 0 0 20px;
    }
    button{
      height: 25px;
      width: 100px;
      border-radius: 3px;
      margin:10px 0 0 20px;  
    }
  }
  .main__banner_img img{
    width:150px;
    height:100px;
    border-radius:0 10px 10px 0;
  }
  .main__products{
    .main__products__list{
      width:425px;
      margin:15px auto;
    }
    .main__products__title{
      width:425px;
      height:15px;
      padding:15px 0;
      margin:auto;
      h3{
        font-size: 12px;
        font-weight: 200;
        line-height: 10px;
      }
    }
  }
  .video__banner img{
    width:425px;
    height:200px;
  }
  .main__banner2{
    width:425px;
    height:100px;
    h1{
      font-weight:200;
      font-size:15px;
      line-height:20px;
      padding:20px 0 0 20px;
    }
    button{
      height: 20px;
      width: 90px;
      border-radius: 3px;
      margin:10px 0 0 20px;  
    }
  }
}


`;
export default S;