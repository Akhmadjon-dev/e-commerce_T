import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import bannerImage from "../../assets/img/banner/image.jpg";
import { Link } from "react-router-dom";
import products from "../../db/products";
import categories from "../../db/categories";



export default class CategoryList extends Component {
  state = {
    type: "soap",
    categories: [],
    products: [],
  };
  componentDidMount() {
    console.log(this.props.match.params.type, "mathchhhcohas");
    const type = this.props.match.params.type;
    this.setState({ type, products, categories });
  }
  typeHandler = type => {
    this.setState({ type })
  }

  typeHandler = (type) => {
    this.setState({ type });
  };

  render() {
    console.log(this.state);
    const { type, categories } = this.state;
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
            {categories.map(i => (
              <button style={{ textTransform: 'uppercase' }} className={type === i.title && 'active__button'} onClick={() => this.typeHandler(i.title)}>{i.title}</button>))}
            <IoIosArrowForward className="bigger" />
          </div>
          <div className="main__products">
            <div className="main__products__list">
              {products
                .filter((item) => item.category === type)
                .map((item) => (
                  <Product
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    rate={item.rate}
                    description={item.description}
                    img={item.img}
                    weight={item.weight}
                  />
                ))}
            </div>
          </div>
        </div>
      </S.Main>
    );
  }
}
