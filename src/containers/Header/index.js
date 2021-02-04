import React, { Component } from "react";
import S from '../../style/pages/header';
import logo from "../../assets/img/Header/image2.png";
import logo1 from "../../assets/img/Header/image1.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

export default class Header extends Component {
  render() {
    return (
      <S.Header>
        <nav>
          <div className="header__logo">
            <img src={logo} alt="" />
            <img src={logo1} alt="" />
          </div>
          <nav className="header__nav">
            <li className="header__link">Меню</li>
            <li className="header__link">Доставка</li>
            <li className="header__link">Оплата</li>
            <li className="header__link">Бронь стола</li>
          </nav>
          <div className="header__num">
            <FiPhone color="#00AC4E" style={{ width: "17px", height: "17px" }} />
            <p>+7 (831) 282-60-00</p>
          </div>
          <div className="header__sign">
            <AiOutlineUser color="#00AC4E" style={{ width: "31px", height: "31px" }} />
            <RiShoppingCartLine color="#00AC4E" style={{ width: "31px", height: "31px" }} />
          </div>
        </nav>
      </S.Header>
    );
  }
}
