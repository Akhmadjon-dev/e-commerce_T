import styled from "styled-components";
import color from "../colors";

const S = {};

S.Header = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
  width:100%;
  .hamburger{
    display:none;
  }
  .d-none{
    display:none;
  }
  nav {
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    line-height: 21px;
    margin: 0 auto;
  }

  .header__logo {
    width: 10%;
    height: 31.22px;
    display: flex;
    align-items: center;
    img {
      cursor: pointer;
    }
    img:last-child {
      margin-left: 10px;
    }
  }
  .header__link{
    color: #333333;
    text-decoration:none;
  }
  .header__nav {
    width: 45%;
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    font-weight: 500;
    margin: 0;
    .header__link {
      cursor: pointer;
    }
  }
  .header__num {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__num p {
    font-weight: 500;
    color: #000000;
  }
  .header__sign {
    height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .phone {
    font-size:20px;
    color: ${color.mainGreen};
    cursor: pointer;
  }
  .user,
  .shoppingCart {
    font-size:24px;
    color: ${color.mainGreen};
    cursor: pointer;
    margin-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    nav {
      height: 90px;
      font-size: 16px;
      line-height: 19px;
      margin: 0 auto;
    }
    .header__logo {
      width: auto;
    }
  }
  @media screen and (max-width: 768px) {
    nav {
      width: 97%;
      height: 70px;
      font-size: 12px;
      line-height: 12px;
      margin: 0 auto;
    }
    .header__tel{
      display: none;
    }
    .header__nav {
      padding: 0 10px;
      width: 55%;
    }
  }
  @media screen and (max-width: 550px) {
    .hamburger{
      display:block;
      font-size:24px;
    }
    nav {
      height: 60px;
      font-size: 12px;
      line-height: 12px;
      margin: 0 auto;
    }
    .header__nav{
      display:none;
    }
    .header__nav {
      padding: 0 10px;
    }
  }
`;

export default S;
