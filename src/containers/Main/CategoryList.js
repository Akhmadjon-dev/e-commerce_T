import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import photo from "../../assets/img/banner/image.jpg";
import photo2 from "../../assets/img/banner/image2.png";
import video__banner from "../../assets/img/banner/video__banner.png";
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
              <img src={photo} alt="" />
            </div>
          </div>
          <div className="main__title">
            <h2 className="link">СУПЫ</h2>
            <h2 className="link">ХАЧАПУРИ</h2>
            <h2 className="link">ХАЧАПУРИ</h2>
            <h2 className="link">ХАЧАПУРИ</h2>
            <h2 className="link">ХАЧАПУРИ</h2>
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
