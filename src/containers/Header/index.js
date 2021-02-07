import React, { Component } from "react";
import S from '../../style/pages/header';
import logo from "../../assets/img/Header/image2.png";
import logo1 from "../../assets/img/Header/image1.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

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
            <Link className="header__link" to='/' >Меню</Link>
            <Link className="header__link" to='/dostavka'>Доставка</Link>
            <Link className="header__link">Оплата</Link>
            <Link className="header__link">Бронь стола</Link>
          </nav>
          <div className="header__num">
            <FiPhone className='phone' />
            <p>+7 (831) 282-60-00</p>
          </div>
          <div className="header__sign">
            <AiOutlineUser className='user' />
            <RiShoppingCartLine className='shoppingCart' />
          </div>
        </nav>
      </S.Header>
    );
  }
}
