import React, { Component } from "react";
import Paginition from "react-paginate";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import banner from "../../assets/img/banner/image.jpg";
import photo2 from "../../assets/img/banner/image2.png";
import video__banner from "../../assets/img/banner/video__banner.png";
import { NavLink } from "react-router-dom";
import products from "../../db/products";
import categories from "../../db/categories";
import pagination from "../../utils/pagination";

export default class Main extends Component {
  state = {
    category: "all",
    products: [],
    pageNumber: 1,
    pageSize: 4,
    searchTerm: ''
  };

  componentDidMount() {
    this.setState({ products });
  }

  categoriesHanlder = (item) => {
    this.setState({ category: item });
  };
  navigateHandler = (item) => {
    this.props.history.push(`/category/${item}`);
    console.log(item);
  };
  handlePageClick = (pageNumber) => {
    this.setState({ pageNumber: pageNumber.selected });
  };
  render() {
    const { products, pageSize, pageNumber, searchTerm } = this.state;
    let data = pagination(products, pageSize, pageNumber);
    console.log(this.state)
    return (
      <S.Main>
        <div className="main">
          <div className='search'>
            <form>
              <input
                type='text'
                placeholder='search ...'
                onChange={(event) => this.setState({ searchTerm: event.target.value })}
              />
              <button >Search</button>
            </form>
          </div>
          <div className="main__banner">
            <div className="main__banner__text">
              <h1>Подарок на первый заказ.</h1>
              <p>Получите 500 рублей за подписку на рассылку</p>
              <button className="main__btn">Подписаться</button>
            </div>
            <div className="main__banner_img">
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="main__title">
            {categories.map((item) => (
              <NavLink
                className="nav__link"
                key={item.id}
                to={{
                  pathname: `/category/${item.title}`,
                }}
                style={{ textTransform: "uppercase" }}
              >
                {item.title}
              </NavLink>
            ))}
            <IoIosArrowForward className="bigger" />
          </div>
          <div className="main__products">
            <div className="main__products__title">
              <h3>Все товары</h3>
            </div>
            <div className="main__products__list">
              {data.filter((item) => {
                if (searchTerm == '') {
                  return item
                } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return item
                }
              }).map((item) => (
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
            <div className='paginiton'>
              <Paginition
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                breakClassName="dots"
                pageCount={Math.ceil(products.length / pageSize)}
                onPageChange={this.handlePageClick}
                pageClassName="pageNumber"
                containerClassName={"pagination"}
                subContainerClassName={"pages"}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                initialPage={1}
                activeClassName={"page-active"}
              />
              <select
                onChange={(e) => this.setState({ pageSize: e.target.value })}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

          </div>
          <div className="video__banner">
            <img className="video__img" src={video__banner} alt="" />
          </div>
          <div className="main__banner2">
            <div className="main__banner__text">
              <h1>Бесплатная доставка по Москве и Области от 2999 RUB!</h1>
              <button>Оформить</button>
            </div>
            <div className="main__banner_img">
              <img src={photo2} alt="" />
            </div>
          </div>
        </div>
      </S.Main>
    );
  }
}
