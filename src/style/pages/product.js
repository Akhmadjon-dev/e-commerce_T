import styled from "styled-components";
import color from "../colors"

const S = {};

S.Product = styled.div`
.item{
    width:205.5px;
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
        position:relative;
    }
    .relative{
        width:205.5px;
        height:125.83px;

    }
    .absolute{
        position:absolute;
        left:60px;
        top:35px;
    }
    .absolute1{
        position:absolute;
        left:78px;
        top:63px;
    }

    .absolute2{
        position:absolute;
        left:112px;
        top:52px;
    }

    .item__price{
        width:180px;
        display:flex;
        justify-content:space-between;
        align-item:center;
        margin-bottom:13px;
    }
    button{
        width:140.32px;
        height:38.02px;
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
`;
export default S