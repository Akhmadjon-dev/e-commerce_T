import React, { Component } from "react";
import S from '../../style/pages/footer'
import { BiUser } from 'react-icons/bi'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return <S.Footer>
      <div className='footer'>
        <div>
          <p>Бесплатный звонок по РФ</p>
          <h4>+7 (831) 282-60-00</h4>
          <p>График работы по будням с 9:00 до 18:00</p>
          <p>Email: info@.ru</p>
          <Link to='/poddershka' className='poddershka'>Поддержка</Link>
        </div>
        <div>
          <p>Для приема заказов</p>
          <h4>+7 (904) 066-46-85</h4>
        </div>
        <div >
          <h4 className='social'>Мы в вконтакте <RiArrowRightSLine /> </h4>
          <h4 className='social'>Мы в instagram <RiArrowRightSLine /></h4>
        </div>
        <div className='join'>
          <BiUser />
          <p>Войти / Регистрация</p>
        </div>
      </div>
      <div className='firm'>
        <p>©2020. Пиросмани</p>
        <p>Условия и соглашения</p>
        <p>Политика конфиденциальности</p>
      </div>
    </S.Footer>;
  }
}
