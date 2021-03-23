import React, { Component, useContext, useEffect, useState } from "react";
import Paginition from "react-paginate";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../../components/Product";
import S from "../../style/pages/main";
import bannerImage from "../../assets/img/banner/image.jpg";
import { Link } from "react-router-dom";
import product from "../../db/products";
import category from "../../db/categories";
import pagination from "../../utils/pagination";
import { Context } from "../../store/context";

export default function CategoryList(props) {
  const [state, setState] = useState({
    type: "soap",
    categories: [],
    products: [],
    pageNumber: 0,
    pageSize: 5,
  });
  const { context, setContext, decrement } = useContext(Context);
  useEffect(() => {
    const type = props.match.params.type;
    console.log(product, "effect", category);
    setState({
      type,
      products: product,
      categories: category,
      pageSize: 5,
      pageNumber: 0,
    });
  }, []);

  const typeHandler = (type) => {
    setState({ ...state, type, pageNumber: 0 });
  };
  const handlePageClick = (pageNumber) => {
    setState({ ...state, pageNumber: pageNumber.selected });
  };

  const { type, categories, pageNumber, pageSize, products } = state;
  const filtered = products.filter((i) => i.category === type);
  let data = pagination(filtered, pageSize, pageNumber);
  console.log(state, "context", context);

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
          {categories.map((i) => (
            <button
              style={{ textTransform: "uppercase" }}
              className={type === i.title && "active__button"}
              onClick={() => typeHandler(i.title)}
            >
              {i.title}
            </button>
          ))}
          <IoIosArrowForward className="bigger" />
        </div>
        <div className="main__products">
          <div className="main__products__list">
            {data.map((item) => (
              // <Product
              //   key={item.id}
              //   title={item.title}
              //   price={item.price}
              //   rate={item.rate}
              //   description={item.description}
              //   img={item.img}
              //   weight={item.weight}
              // />
              <Product key={item.id} data={item} />
            ))}
          </div>
          {filtered.length > pageSize && (
            <div className="paginiton">
              <Paginition
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                breakClassName="dots"
                pageCount={Math.ceil(filtered.length / pageSize)}
                onPageChange={handlePageClick}
                pageClassName="pageNumber"
                containerClassName={"pagination"}
                subContainerClassName={"pages"}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                initialPage={pageNumber}
                forcePage={pageNumber}
                activeClassName={"page-active"}
              />
              <select
                onChange={(e) =>
                  setState({
                    ...state,
                    pageSize: e.target.value,
                    pageNumber: 0,
                  })
                }
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
// export default class CategoryList extends Component {
//   state = {
//     type: "soap",
//     categories: [],
//     products: [],
//     pageNumber: 0,
//     pageSize: 5,
//   };
//   componentDidMount() {
//     const type = this.props.match.params.type;

//     this.setState({ type, products, categories });
//   }
//   typeHandler = (type) => {
//     this.setState({ type, pageNumber: 0 });
//   };
//   handlePageClick = (pageNumber) => {
//     this.setState({ pageNumber: pageNumber.selected });
//   };

//   render() {
//     const { type, categories, pageNumber, pageSize, products } = this.state;
//     const filtered = products.filter((i) => i.category === type);
//     let data = pagination(filtered, pageSize, pageNumber);
//     console.log(data, filtered, this.state);

//     return (
//       <S.Main>
//         <div className="main">
//           <div className="main__banner">
//             <div className="main__banner__text">
//               <h1>Подарок на первый заказ.</h1>
//               <p>Получите 500 рублей за подписку на рассылку</p>
//               <button>Подписаться</button>
//             </div>
//             <div className="main__banner_img">
//               <img src={bannerImage} alt="" />
//             </div>
//           </div>
//           <div className="main__title">
//             {categories.map((i) => (
//               <button
//                 style={{ textTransform: "uppercase" }}
//                 className={type === i.title && "active__button"}
//                 onClick={() => this.typeHandler(i.title)}
//               >
//                 {i.title}
//               </button>
//             ))}
//             <IoIosArrowForward className="bigger" />
//           </div>
//           <div className="main__products">
//             <div className="main__products__list">
//               {data.map((item) => (
//                 // <Product
//                 //   key={item.id}
//                 //   title={item.title}
//                 //   price={item.price}
//                 //   rate={item.rate}
//                 //   description={item.description}
//                 //   img={item.img}
//                 //   weight={item.weight}
//                 // />
//                 <Product key={item.id} data={item} />
//               ))}
//             </div>
//             {filtered.length > pageSize && (
//               <div className="paginiton">
//                 <Paginition
//                   previousLabel="Previous"
//                   nextLabel="Next"
//                   breakLabel="..."
//                   breakClassName="dots"
//                   pageCount={Math.ceil(filtered.length / pageSize)}
//                   onPageChange={this.handlePageClick}
//                   pageClassName="pageNumber"
//                   containerClassName={"pagination"}
//                   subContainerClassName={"pages"}
//                   pageRangeDisplayed={5}
//                   marginPagesDisplayed={2}
//                   initialPage={pageNumber}
//                   forcePage={pageNumber}
//                   activeClassName={"page-active"}
//                 />
//                 <select
//                   onChange={(e) =>
//                     this.setState({ pageSize: e.target.value, pageNumber: 0 })
//                   }
//                 >
//                   <option value="5">5</option>
//                   <option value="10">10</option>
//                   <option value="20">20</option>
//                   <option value="50">50</option>
//                 </select>
//               </div>
//             )}
//           </div>
//         </div>
//       </S.Main>
//     );
//   }
// }
