import React, { useContext, useState } from "react";
import { ContentApp } from "../../style/index";
import { RiStarSFill, RiShoppingCartLine } from "react-icons/ri";

import img from "../../assets/img/main/productImage.png";
import bonus from "../../assets/img/main/Group.png";
import photo2 from "../../assets/img/banner/image2.png";
import delivery from "../../assets/img/main/delivery.png";
import AboutProduct from "../../components/aboutProduct";
import Reviews from "../../components/Reviews";
import Params from "../../components/Params";
import { productContext } from "../../components/productContext";
import { Context } from "../../store/context";

export default function Content() {
  const [context, setContext] = useContext(Context);
  const data = useContext(productContext);
  const [isShow, setIsShow] = useState(false);
  const [tab, setTab] = useState("about");
  const [range, setRange] = useState(1000);
  const [count, setCount] = useState(1);
  const modalHandler = (tab) => {
    setTab(tab);
  };

  const rangeHandler = ({ target }) => {
    console.log(target.value, target.name);
    if (target.value < 1000) {
      setRange(1000);
    } else {
      setRange(target.value);
    }
    console.log(range);
  };

  return (
    <ContentApp>
      {context.length ? (
        <>
          {context.map((item) => (
            <article>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="sell">
                <strong style={{ marginLeft: "5%" }}>
                  {item.title} {item.weight}гр
                </strong>
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
                  <strong>{count * item.price} ₽</strong>
                </div>
                <div className="price">
                  <span>Кол-во шт в упаковке</span>
                  <strong>4 шт.</strong>
                </div>
                <div className="price">
                  <span>Количество</span>
                  <div className="button">
                    <p
                      onClick={() => setCount(count - 1)}
                      style={{ cursor: "pointer" }}
                    >
                      -
                    </p>
                    <p>{count > 0 ? count : 0}шт</p>
                    <p
                      onClick={() => setCount(count + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      +
                    </p>
                  </div>
                </div>
                <div className="price">
                  <strong>Итого к оплате</strong>
                  <strong>{item.price} ₽</strong>
                </div>
                <div className="price">
                  <strong>Итого к оплате</strong>
                  <strong>{item.price} ₽</strong>
                </div>
                <div className="price">
                  <button className="price__button kupit">Купить</button>
                  <button className="price__button">
                    <RiShoppingCartLine />
                  </button>
                </div>
              </div>
            </article>
          ))}

          <aside>
            <div className="params">
              <div className="links">
                <p className="link" onClick={() => modalHandler("about")}>
                  О товаре
                </p>
                <p className="link" onClick={() => modalHandler("params")}>
                  Параметры
                </p>
                <p className="link" onClick={() => modalHandler("rate")}>
                  Отзывы
                </p>
              </div>
              {tab === "about" && (
                <div className="about">
                  <strong>Описание</strong>
                  <p>
                    Полутвердый пластичный однородный сыр, слегка ломкий на
                    изгибе. Пажитник придает легкое ореховое послевкусие. В
                    Италии считается столовым сыром, который подходит к любому
                    времени суток и к любому блюду и к вину <br />
                    <br />
                    Вес головки 500 г. +/-10%. Цена за 1 кг.
                    <br />
                    <br />
                    Продукция компании Alpenville изготовлена преимущественно из
                    Шарангского молока
                  </p>
                </div>
              )}
              {tab === "params" && <Params />}
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
                0
                <input
                  onChange={rangeHandler}
                  type="range"
                  name="range"
                  min="0"
                  max="3000"
                  value={range}
                  defaultValue="1000"
                />
                {range ? range : "3000"}
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
        </>
      ) : (
        <h3>No data</h3>
      )}
    </ContentApp>
  );
}
