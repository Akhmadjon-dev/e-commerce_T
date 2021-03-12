import React, { Component } from "react";
import { ContentApp } from "../../style/index";
import { RiStarSFill, RiShoppingCartLine } from "react-icons/ri";

import img from "../../assets/img/main/productImage.png";
import bonus from "../../assets/img/main/Group.png";
import photo2 from "../../assets/img/banner/image2.png";
import delivery from "../../assets/img/main/delivery.png";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import AboutProduct from "../../components/aboutProduct";
import Reviews from "../../components/Reviews";

export default class Content extends Component {
  state = {
    isShow: false,
    tab: "about",
  };
  modalHandler = (tab) => {
    this.setState({ tab });
  };

  render() {
    const { isShow, tab } = this.state;
    return (
      <ContentApp>
        <article>
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="sell">
            <strong style={{ marginLeft: "5%" }}>Говядина 250гр</strong>
            <span style={{ marginLeft: "5%" }}>
              <RiStarSFill className="activeStar" />
              <RiStarSFill className="activeStar" />
              <RiStarSFill className="activeStar" />
              <RiStarSFill className="activeStar" />
              <RiStarSFill className="noactiveStar" />
            </span>
            <span style={{ marginLeft: "5%" }}>Кол-во отзывов: 23</span>
            <div className="price">
              <span>Цена за уп.</span>
              <strong>1 050 ₽</strong>
            </div>
            <div className="price">
              <span>Кол-во шт в упаковке</span>
              <strong>4 шт.</strong>
            </div>
            <div className="price">
              <span>Количество</span>
              <div className="button">
                <p>-</p>
                <p>1шт</p>
                <p>+</p>
              </div>
            </div>
            <div className="price">
              <strong>Итого к оплате</strong>
              <strong>1 050 ₽</strong>
            </div>
            <div className="price">
              <strong>Итого к оплате</strong>
              <strong>1 050 ₽</strong>
            </div>
            <div className="price">
              <button className="price__button kupit">Купить</button>
              <button className="price__button">
                <RiShoppingCartLine />
              </button>
            </div>
          </div>
        </article>
        <aside>
          <div className="params">
            <div className="links">
              <p className="link" onClick={() => this.modalHandler("about")}>
                О товаре
              </p>
              <p className="link" onClick={() => this.modalHandler("params")}>
                Параметры
              </p>
              <p className="link" onClick={() => this.modalHandler("rate")}>
                Отзывы
              </p>
            </div>
            {tab === "about" && (
              <div>
                <strong>Описание</strong>
                <p>
                  Полутвердый пластичный однородный сыр, слегка ломкий на
                  изгибе. Пажитник придает легкое ореховое послевкусие. В Италии
                  считается столовым сыром, который подходит к любому времени
                  суток и к любому блюду и к вину <br />
                  <br />
                  Вес головки 500 г. +/-10%. Цена за 1 кг.
                  <br />
                  <br />
                  Продукция компании Alpenville изготовлена преимущественно из
                  Шарангского молока
                </p>
              </div>
            )}
            {tab === "params" && <h3>params</h3>}
            {tab === "rate" && <Reviews />}
          </div>
          <div className="rek">
            <p style={{ textAlign: "center" }}>
              Закажите на 3000 RUB и получите
            </p>
            <div className="bonus">
              <img src={bonus} alt="" />
              <p>
                <strong>30 RUB</strong> на бонусный счет
              </p>
            </div>
            <div className="bonus">
              <img src={delivery} alt="" />
              <strong>Бесплатная доставка</strong>
            </div>
            <span>
              <strong>1000 </strong>(минимальный заказ)
            </span>
            <div className="range">
              {" "}
              0<input type="range" min="1" max="50" value="25" />
              3000
            </div>
            <span>Осталось 1988 RUB до бесплатной доставки</span>
          </div>
        </aside>
        <div className="main__banner2">
          <div className="main__banner__text">
            <h1>Бесплатная доставка по Москве и Области от 2999 RUB!</h1>
            <button>Оформить</button>
          </div>
          <div className="main__banner_img">
            <img src={photo2} alt="" />
          </div>
        </div>
      </ContentApp>
    );
  }
}
