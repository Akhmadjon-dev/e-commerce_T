import React, { Component } from "react";
import S from "../../styles/pages/header";

// import logo from "../../assets/img/logo.jpg";
export default class Header extends Component {
  render() {
    return (
      <S.Header>
        <div className="header__logo">Logo</div>
        <nav className="header__nav">
          <li className="header__link">Menu</li>
          <li className="header__link">Menu</li>
          <li className="header__link">Menu</li>
          <li className="header__link">Menuuuuuuuu</li>
        </nav>
      </S.Header>
    );
  }
}