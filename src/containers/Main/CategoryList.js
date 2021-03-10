import React, { Component } from "react";
import Paginition from "react-paginate";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import bannerImage from "../../assets/img/banner/image.jpg";
import { Link } from "react-router-dom";
import products from "../../db/products";
import categories from "../../db/categories";
import pagination from "../../utils/pagination";




export default class CategoryList extends Component {
  state = {
    type: "soap",
    categories: [],
    products: [],
    pageNumber: 1,
    pageSize: 5,
  };
  componentDidMount() {
    const type = this.props.match.params.type;
    this.setState({ type, products, categories });
  }
  typeHandler = type => {
    this.setState({ type, pageNumber: 1 })
  }
  handlePageClick = (pageNumber) => {
    this.setState({ pageNumber: pageNumber.selected });
  };

  render() {
    const { type, categories, pageNumber, pageSize, products } = this.state;
    const foo = products.filter((item) => item.category === type)
    let data = pagination(foo, pageSize, pageNumber);
    console.log(data, foo)

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
              {data
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
            {foo.length > pageSize && (
              <div className='paginiton'>
                <Paginition
                  previousLabel="Previous"
                  nextLabel="Next"
                  breakLabel="..."
                  breakClassName="dots"
                  pageCount={Math.ceil(foo.length / pageSize)}
                  onPageChange={this.handlePageClick}
                  pageClassName="pageNumber"
                  containerClassName={"pagination"}
                  subContainerClassName={"pages"}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={2}
                  initialPage={pageNumber}
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
            )}
          </div>
        </div>
      </S.Main>
    );
  }
}
