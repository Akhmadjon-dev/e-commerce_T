import styled from "styled-components";
import color from "../colors"

const S = {};

S.Product = styled.div`
.item{
    width:205px;
    height:328px;
    color:black;
    margin-bottom:30px;

    h4{
        margin:0;
    }
    p{
        margin:0;
    }
    .image{
        width:205px;
        height:150px;
        background-color:#eee;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .item__price{
        width:80%;
        display:flex;
        justify-content:space-between;
        align-item:center;
        margin-bottom:13px;
    }
    .button{
        text-decoration:none;
        display:inline-block;
        padding:10px 20px;
        border-radius:5px;
        border:none;
        outline:none;
        color:white;
        background-color:#00AC4E;
        cursor:pointer;
    }
    .activeStar{
        color:${color.mainGreen}
    }
    .noactiveStar{
        color:${color.mainGrey}
    }
}
@media screen and (max-width:460px){
    .item{
        width:80%;
        height:auto;
        margin:0 auto;
        margin-bottom:30px;
        }
        .image{
            margin:0 auto;
        }
        }    
        .item__price{
            width:70%;
            height:30px;
            margin:auto;
        }
        button{
            width:100%;
            height:100%;
            border-radius:5px;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0 auto;
        }
        h4,p{
            text-align:center;
        }
        span{
            display:flex;
            justify-content:center;
        }
    }
    
}
`;
export default S