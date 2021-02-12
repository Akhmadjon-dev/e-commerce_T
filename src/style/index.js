import styled from "styled-components";
import color from "./colors";

export const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const Signin = styled.div`
.sign{
  position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:25vw;
min-width:350px;
min-height:60vh;
background-color:white;
border-radius:15px;
box-shadow: 0px 0px 17.7465px rgba(0, 0, 0, 0.12);
z-index:1000;
.radio__input{
  display:flex;
  align-items:center;
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
  margin:20px 0; 
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
button{
  padding:10px 45px;
  background-color:${color.mainGreen};
  color:white;
  border:none;
  outline:none;
  border-radius:10px;
  margin-left:25%;
}
p{
  margin-top:10px;
  text-align:center;
}

`;
export const Deliver = styled.div`
  width:100%;
  .dostavka{
    width:90%;
    margin:20px auto;
    input{
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
