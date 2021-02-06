import React, { Component } from "react";
import S from "../../styles/pages/header";

import logo from "../../assets/img/logo.jpg";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
export default class Header extends Component {
  render() {
    return (
      <S.Header>
        <div className="header__logo">Logo</div>
        <img src={logo} alt="logo" />
        <Logo />
        <nav className="header__nav">
          <li className="header__link">Menu</li>
          <li className="header__link">Menu</li>
          <li className="header__link">Menu</li>
          <li className="header__link">Menu</li>
        </nav>
      </S.Header>
    );
  }
}
