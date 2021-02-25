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
  }
  modalHandler = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }))
  }
  render() {
    const { isShow } = this.state;
    console.log(isShow);
    return (

      <S.Header>
        {isShow && <SignIn changeHandler={this.modalHandler} />}
        <nav>
          <HiOutlineMenuAlt2 className='hamburger' />
          <div className="header__logo">
            <Link to='/'><img src={logo} alt="" /></Link>
            <Link to='/'><img src={logo1} alt="" /></Link>
          </div>
          <nav className="header__nav">
            <Link className="header__link" to='/' >Меню</Link>
            <Link className="header__link" to='/deliver'>Доставка</Link>
            <Link className="header__link" to='/oplata'>Оплата</Link>
            <Link to='/reservation' className="header__link">Бронь стола</Link>
          </nav>
          <div className="header__num">
            <FiPhone className="phone" />
            <p className='header__tel'>+7 (831) 282-60-00</p>
          </div>
          <div className="header__sign">
            <AiOutlineUser onClick={this.modalHandler} className="user" />
            <Link to='/cart'><RiShoppingCartLine className="shoppingCart" /></Link>
          </div>
        </nav>
      </S.Header>
    );
  }
}
