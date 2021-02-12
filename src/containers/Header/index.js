import React, { Component } from "react";
import S from "../../style/pages/header";
import logo from "../../assets/img/Header/image2.png";
import logo1 from "../../assets/img/Header/image1.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import SignIn from "../../components/SignIn";

export default class Header extends Component {
  state = {
    isShow: false, 
    data: [2,3,4,5,6,7]
  }
  modalHandler = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }))
  }
  render() {
    const { isShow } = this.state; 
    return (

      <S.Header>
        <div className={!isShow && 'd-none'}>
          
         <SignIn onChange={this.modalHandler} />
        </div>
        <nav>
          <HiOutlineMenuAlt2 className='hamburger' />
          <div className="header__logo">
            <img src={logo} alt="" />
            <img src={logo1} alt="" />
          </div>
          <nav className="header__nav">
            <Link className="header__link" to='/' >Меню</Link>
            <Link className="header__link" to='/deliver'>Доставка</Link>
            <Link className="header__link" to='/oplata'>Оплата</Link>
            <Link className="header__link">Бронь стола</Link>
          </nav>
          <div className="header__num">
            <FiPhone className="phone" />
            <p className='header__tel'>+7 (831) 282-60-00</p>
          </div>
          <div className="header__sign">
            <AiOutlineUser onClick={this.modalHandler} className="user" />
            <RiShoppingCartLine className="shoppingCart" />
          </div>
        </nav>
      </S.Header>
    );
  }
}
