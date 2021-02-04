import styled from "styled-components";
import color from '../colors';
const S = {};
S.Footer = styled.footer`
width:1440px;
height:301px;
background-color:${color.mainGreen};
color:white;
display:flex;
flex-direction:column;
.firm{
    width:994px;
    height:30px;
    display:flex;
    margin:0 auto;
}
.firm p{
    padding-right:40px;
    font-family: TT Hoves;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    margin:0;

}
.footer{
    padding-top:30px;
    width:994px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    .social{
        display:flex;
        align-items:center;
    }
    p{
        font-family: TT Norms Pro;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;

    }
    h4{
        margin:16px;
        margin-left:0;
        font-family: TT Norms Pro;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 3.0851736068725586px;
        text-align: left;

    }
    .join{
        height: 32.39432144165039px;
        width: 182.02523803710938px;
        display:flex;
        align-items:center;
        margin-top:14px;
    }
    .join p{
        padding-left:10px;
    }
}
`;
export default S