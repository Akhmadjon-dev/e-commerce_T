import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import bannerImage from "../../assets/img/banner/image.jpg";
import { Link } from "react-router-dom";
// import Pagination from "../../components/Pagination";

export default class CategoryList extends Component {
  render() {
    return (
      <S.Main>
        <div className="main">
          <div className="main__banner">
            <div className="main__banner__text">
              <h1>Подарок на первый заказ.</h1>
              <p>Получите 500 рублей за подписку на рассылку</p>
              <button>Подписаться</button>
            </div>
            <div className="main__banner_img">
              <img src={bannerImage} alt="" />
            </div>
          </div>
          <div className="main__title">
            <Link to='/category'>СУПЫ</Link>
            <Link to='/' >ХАЧАПУРИ</Link>
            <Link to='/'>ХАЧАПУРИ</Link>
            <Link to='/'>ХАЧАПУРИ</Link>
            <Link to='/'>ХАЧАПУРИ</Link>
            <IoIosArrowForward className="bigger" />
          </div>
          <div className="main__products">
            <div className="main__products__title">
              <h3>Все товары категории</h3>
            </div>
            <div className="main__products__list">
              <Product
                name="somsa"
                info="Jizzax somsasi juda mazali qorin to'yadi "
                start="5"
                price="24"
              />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </S.Main>
    );
  }
}
