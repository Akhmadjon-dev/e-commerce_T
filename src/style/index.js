import styled from "styled-components";
import color from "./colors";

export const StyledApp = styled.div`
`;
export const ContentApp = styled.div`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.main{
  width:70%;
  min-height:80vh;
  margin:0 auto;
  .dostavka__button{
    width:30%;
    display:flex;
    justify-content:space-between;
  }
  .katalog{
    padding:10px 30px;
    background-color:${color.mainGreen};
    border:none;
    outline:none;
    color:white;
    border-radius:10px;
  }
  .oplate{
    display:flex;
    align-items:center;
    color:${color.mainGreen};
    .arrow{
      padding-top:5px;
      font-size:20px;
      padding-left:10px;}
  }
h3{
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  margin-bottom:15px;
}
.vacan{
  width:90%;
  min-height:20vh;
  strong{
    font-family: TT Norms Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
  }
  p{
    margin-top:10px;
    font-family: TT Norms Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

  }
  span{
    font-weight:500;
    color:#000000;
  }
}

}
.top{
  display:flex;
  margin-left:15%;
  .data2{
    margin-right:80px;
  }
    .history{
      width:138px;
      height:109px;
      background: #00AC4E;
      border-radius: 15.8545px;
      display:flex;
      justify-content:center;
      align-items:center;
      margin-right:80px;
      img{
        width:auto;
      }
    }
  }
  .main{
    .aside,.article{
      width:100%;
      min-height:200px;
      margin-top:30px;
      padding:15px;
      display:flex;
      justify-content:space-between;
      background: #FFFFFF;
      box-shadow: 0px 0px 16.2899px rgba(0, 0, 0, 0.07);
      border-radius: 13.0319px;
      .text{
        p{
          display:flex;
          padding:5px 0;
          font-family: TT Norms Pro;
          font-style: normal;
          font-weight: 500;
          font-size: 19.4096px;
          line-height: 29px;
          span{
            font-family: TT Norms Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 19.4096px;
            line-height: 29px;
          }
        }
      }
      .box{
        width:350px;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        .button{
          width:80px;
          height:30px;
          display:flex;
          justify-content:space-around;
          align-items:center;
          background: #FCFCFC;
          border: 0.903636px solid #EBEBEB;
          border-radius: 9.03636px;
        }
        img{
          height:80%;
        }
        
        border-bottom:1px solid #EBEBEB;
      }
     }
    }
  }
main{
  width:70%;
  min-height:80vh;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  
  
  aside{
    width:47.5%;
    min-height:70vh;
    dispaly:flex;
    flex-direction:column;
    
    .basket{
      width:100%;
      min-height:40vh;      
      h2,h3{
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 50px;
        color: #333333;
      } 
      h3{
        border-bottom:1px solid #EBEBEB;
      } 
      .boxx{
        width:80%;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        img{
          height:80%;
        }
      }
      .boxxx{
        width:100%;
        height:80px;
        display:flex;
        align-items:center;
        input{
          height:40px;
          background: #FCFCFC;
          border: 1.61275px solid #EBEBEB;
          border-radius: 8.06373px;
        }
        .boxxx__p{
          display:flex;
          flex-direction:column;
        }
      }
      .box{
        width:100%;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        .button{
          width:80px;
          height:30px;
          display:flex;
          justify-content:space-around;
          align-items:center;
          background: #FCFCFC;
          border: 0.903636px solid #EBEBEB;
          border-radius: 9.03636px;
        }
        img{
          height:80%;
        }
        
        border-bottom:1px solid #EBEBEB;
      }
     }
     .basket__bottom{
       .dostavka{
         width:60%;
         height:50px;
         display:flex;
         justify-content:space-between;
         align-items:center;
         button{
           padding:5px 10px;
           background: #00AC4E;
           border-radius: 9.59274px;
           border:none;
           outline:none;
           color:white;
         }
         span{
          ont-family: TT Norms Pro;
          font-style: normal;
          font-weight: 500;
          font-size: 14.6903px;
          line-height: 11px;
          color: #828282;
         }
       }
       .boxs{
         width:100%;
         height:100px;
         display:flex;
         flex-direction:column;
         background: #FFFFFF;
         box-shadow: 0px 0px 28.763px rgba(0, 0, 0, 0.06);
         border-radius: 9.58767px;
         .hisob{
           width:90%;
           height:50px;
           margin:0 auto;
           display:flex;         
           align-items:center;
           justify-content:space-between;
           strong{
            font-family: TT Norms Pro;
            font-style: normal;
            font-weight: 500;
            font-size: 15.3403px;
            line-height: 23px;
           }
         }
       }
     }
  }
  article{
    width:47.5%;
    min-height:70vh;
   form{
     width:100%;
     min-height:70vh;
     p{
       display:flex;
       flex-direction:column;
       margin-bottom:15px;
       label{
         margin-bottom:5px;
         font-family: TT Norms Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 15.6716px;
          line-height: 24px;
       }
       input,select{
         height:40px;
         padding-left:10px;
        background: #FCFCFC;
        border: 1.1194px solid #EBEBEB;
        border-radius: 7.11356px;
        outline:none;
       }
     }
     .link{
      font-family: TT Norms Pro;
      font-style: normal;
      font-weight: 500;
      font-size: 17.0726px;
      line-height: 24px;
      color: #00AC4E;
      cursor:pointer;
     }
     button{
       display:block;
       border:none;
       outline:none;
       color:white;
       padding:5px 10px;
       margin-top:10px;
      background: #00AC4E;
      border-radius: 5.59701px;
     }
   }
  }
}
.main__banner2{
  width: 90%;
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
    height: 52px;
    width: 217px;
    border-radius: 5px;
    margin:31px 0 0 41px;
    background: #00AC4E;
    color:white;
    border:none;
    outline:none;
  }
}
  width:100%;
  min-height:80vh;
  margin:30px auto;
  aside{
    width:70%;
    display:flex;
    justify-content:space-between;
    margin: auto;
    .promokod{
      margin-top:50px;
        h4{
          font-family: TT Norms Pro;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 25px;
          margin-bottom:30px;
        }
        .basket__input{
          width:100%;
          height:40px;
          display:flex;
          justify-content:space-between;
          input{
            width:60%;
            height:40px;
            background: #FCFCFC;
            border: 1px solid #EBEBEB;
            border-radius: 5px;
            padding-left:10px;
          }
          button{
            width:35%;
            height:40px;
            background: #00AC4E;
            border-radius: 5px;
            border:none;
            outline:none;
            color:white;
          }
        }
      }
    .basket__rek{
      width:50%;
      height:30vh;
      display:flex;
      flex-direction:column;      
      justify-content:center;
      background: #FFFFFF;
      box-shadow: 0px 0px 27.1091px rgba(0, 0, 0, 0.06);
      border-radius: 15px;
      
      p,.range{
        padding:10px 0;
      }
      .range{
        width:100%;
        display:flex;
        justify-content:center;
        input{
        width:60%;
      }
      } 
      .bonus{
        width:90%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:10px auto;
        p{
          font-family: TT Norms Pro;
          font-style: normal;
          font-weight: 500;
          font-size: 14.5089px;
          line-height: 17px;
        }
      }
      span{
        text-align:center;
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 8.37989px;
        line-height: 10px;
      }
    }
    .rek{
      width:30%;
      height:30vh;
      display:flex;
      flex-direction:column;      
      justify-content:center;
      background: #FFFFFF;
      box-shadow: 0px 0px 27.1091px rgba(0, 0, 0, 0.06);
      border-radius: 15px;
      p,.range{
        padding:10px 0;
      }
      .range{
        width:100%;
        display:flex;
        justify-content:center;
        input{
        width:60%;
      }
      } 
      .bonus{
        width:90%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:10px auto;
        p{
          font-family: TT Norms Pro;
          font-style: normal;
          font-weight: 500;
          font-size: 14.5089px;
          line-height: 17px;
        }
      }
      span{
        text-align:center;
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 8.37989px;
        line-height: 10px;
      }
    }
    .params{
      width:60%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      strong{
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 21.6479px;
        line-height: 19px;
        margin-top:30px;
      }
      p{
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18.0399px;
        line-height: 19px;
        color: #828282;
      }
      .links{
        .link{
          text-decoration:none;
          font-family: TT Norms Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 28.8639px;
          line-height: 19px;
          color: #828282;
          cursor:pointer;
        }
        width:100%;
        display:flex;
        justify-content:space-around;
      }
    }
  }
  article{
    width:70%;
    display:flex;
    justify-content:space-between;
    margin: auto;
    margin-bottom:30px;
    .button{
      width:80px;
      height:30px;
      display:flex;
      justify-content:space-around;
      align-items:center;
      background: #FCFCFC;
      border: 0.903636px solid #EBEBEB;
      border-radius: 9.03636px;
    }
    .basket{
     width:65%;
     min-height:40vh;
     .box{
       width:100%;
       height:80px;
       display:flex;
       align-items:center;
       justify-content:space-between;
       img{
         height:80%;
       }
       h3{
        font-family: TT Norms Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 50px;
        color: #333333;
       }
       border-bottom:1px solid #EBEBEB
     }
    }
  }
  .img{
    width:60%;
    height:50hv;
    background: #F9F9F9;
    border-radius: 15px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .img img{
    width:250px;
  }
  .sell{
    width:30%;
    height:50vh;
    display:flex;
    flex-direction:column;      
    justify-content:center;
    background: #FFFFFF;
    box-shadow: 0px 0px 27.1091px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    .basket__price{
      width:90%;
      display:flex;
      justify-content:space-between;
      margin: 15px auto;
      .basket__button{
        padding:10px 20px;
        background-color:${color.mainGreen};
        outline:none;
        border:none;
        border-radius:5px;
        color:white;
        margin-top:10px;
      }
    }   
    .basket__price2{
      display:flex;
      flex-direction:column;
      margin-left:5%;
    }   
    .price{
      width:90%;
      display:flex;
      justify-content:space-between;
      margin: 5px auto;
      .price__button{
        padding:10px 20px;
        border-radius:5px;
        background-color:${color.mainGreen};
        color:white;
        border:none;
        outline:none;
      }
      .kupit{
        padding:10px 50px;
      }
      .button{
        width:80px;
        height:30px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background: #FCFCFC;
        border: 0.903636px solid #EBEBEB;
        border-radius: 9.03636px;
      }
    }
  }
  .activeStar{
    color:${color.mainGreen}
}
.noactiveStar{
    color:${color.mainGrey}
}


`;
export const Signup = styled.div`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.sendEmail{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:30vw;
  min-width:300px;
  min-height:40vh;
  background-color:white;
  border-radius:15px;
  box-shadow: 0px 0px 17.7465px rgba(0, 0, 0, 0.12);
  z-index:1000;
}
h4{
  text-align:center;
}
.email{
  font-size:40px;
  color:${color.mainGreen}
}
.email__button{
  margin-top: 15px;
  padding:10px 20px;
  margin-left:35%;
  background-color:${color.mainGreen};
  border-radius:10px;
  border:none;
  outline:none;
  color:white;

}
.sign__up{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:30vw;
  min-width:300px;
  min-height:65vh;
  background-color:white;
  border-radius:15px;
  box-shadow: 0px 0px 17.7465px rgba(0, 0, 0, 0.12);
  z-index:1000;
  .inputs{
    p{
      margin:0;
      padding:0;
      color:red;
    }
  }
  }
  
  .radio__input{
  width:80%;
  height:30px;
  margin:0 auto;
  display:flex;
  align-items:center;
  .radio__p{
    font-family: TT Norms Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 9.3569px;
    line-height: 14px;
    text-align: center;
    color: #C6C6C6;
    margin-left:10px;
  }
}
  .signup__button{
    margin-top: 15px;
    padding:10px 20px;
    margin-left:25%;
    background-color:${color.mainGreen};
    border-radius:10px;
    border:none;
    outline:none;
    color:white;
  }
`;
export const Signin = styled.div`
.sign,.review{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:30vw;
min-width:350px;
min-height:55vh;
background-color:white;
border-radius:15px;
box-shadow: 0px 0px 17.7465px rgba(0, 0, 0, 0.12);
z-index:1000;
}
.review{
  min-height:50vh;
  .like{
    margin-top:15px;
    width:90%;
    height:20px;
      display:flex;
      align-items:center;
      .activeStar{
        color:${color.mainGreen};
      }
    }
  .review__inputs{
    display:flex;
    flex-direction:column;
    
    div{
      width:80%;
      min-height:50px;
      margin:0 auto;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    input{
      width:15vw;
      height:5vh;
      background: #FCFCFC;
      border: 0.572603px solid #EBEBEB;
      outline:none;
    }
  }
  .review__button{
    padding:10px 20px;
    background-color:${color.mainGreen};
    color:white;
    border:none;
    outline:none;
    border-radius: 6.57233px;
    margin:30px 30%;
  }
}
&::before{
  content:'';
  width:100%;
  height:100%;
  min-height:100vh;
  background-color:rgba(0, 0, 0, 0.5);
  position:absolute;
  top:0;
  left:0;
  z-index:999;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.header{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.inputs div{
  width:80%;
  height:40px;
  margin:15px 0; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#FCFCFC;
  border: 0.873181px solid #EBEBEB;
  border-radius: 5.91549px;
  input{
    width:80%;
    height:40px;
    border:none;
    outline:none;
    border: 0.873181px solid #EBEBEB;
    border-left:none;
    border-right:none;
  }
}
.inputs{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.user{
  font-size:40px;
  color:${color.mainGrey}
}
.link{
  display:block;
  text-align:center;
margin-bottom:10px;
}
.close{  
  margin-top:20px;
  margin-left:85%;
  color:${color.mainGreen};
}
.tel,
.kalit{
margin-left:15px;
}
.signin__button{
  padding:10px 45px;
  background-color:${color.mainGreen};
  color:white;
  border:none;
  outline:none;
  border-radius:10px;
  margin-left:30%;
}
.signin__p{
  margin-top:10px;
  text-align:center;
}
`;
export const Deliver = styled.div`
  width:100%;
  .dostavka{
    width:90%;
    margin:20px auto;
    textarea{
      width:50%;
      height:200px;
      padding-left:20px;
      margin:40px 0;
      background-color:${color.mainGrey};
      border:none;
      outline:none;
    }
    .dostavka__button{
      width:30%;
      display:flex;
      justify-content:space-between;
      .link{
        text-decoration:none;
      }
    }
    .katalog{
      padding:10px 30px;
      background-color:${color.mainGreen};
      border:none;
      outline:none;
      color:white;
      border-radius:10px;
    }
    .oplate{
      // font-size:20px;
      // margin:0;      
      display:flex;
      align-items:center;
      color:${color.mainGreen};
      .arrow{
        padding-top:5px;
        font-size:20px;
        padding-left:10px;
    }

    }
  }
`;
export const Oplata = styled.div`

`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc || "flex-start"};
  align-items: ${(props) => props.ai || "flex-start"};
  flex-direction: ${(props) => props.fd || "row"};
  color: ${(props) => (props.active ? "green" : "red")};
  flex-wrap: ${(props) => props.fw || "no-wrap"};
`;
