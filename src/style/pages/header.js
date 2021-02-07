import styled from "styled-components";
import color from "../colors";

const S = {};

S.Header = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
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
  .header__nav {
    width: 45%;
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    font-weight: 500;
    color: #333333;
    margin: 0;
    .header__link {
      cursor: pointer;
    }
  }
  .header__num {
    // width: 10%;
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
    width: 17px;
    height: 17px;
    color: ${color.mainGreen};
    cursor: pointer;
  }
  .user,
  .shoppingCart {
    height: 31px;
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
    .user,
    .shoppingCart {
      width: 18px;
      height: 18px;
    }
    .header__sign {
      width: 50px;
    }
    .header__num {
      display: none;
    }
    .header__nav {
      padding: 0 10px;
      width: 55%;
    }
  }
  @media screen and (max-width: 425px) {
    nav {
      height: 60px;
      font-size: 12px;
      line-height: 12px;
      margin: 0 auto;
    }

    .user,
    .shoppingCart {
      width: 14px;
      height: 14px;
    }
    .header__nav {
      padding: 0 10px;
    }
  }
`;

export default S;
