import React from "react";
import S from "../style/pages/product";
import { RiStarSFill } from "react-icons/ri";
import productImage from "../assets/img/main/productImage.png";
import { Link } from "react-router-dom";

export default function Product({
  title,
  img,
  price,
  description,
  weight,
  rate,
}) {
  return (
    <S.Product>
      <div className="item">
        <div className="image">
          <img src={img ? img : productImage} alt="product banner" />
        </div>
        <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
        <p>{description}</p>
        <span>{new Array(rate).fill(<RiStarSFill />)}</span>
        <div className="item__price">
          <h4>{price} ₽/кг</h4>
          <p>За{weight}гр.</p>
        </div>
        <Link className="button" to={{
          pathname: '/content',
          state: {
            from: { title }
          }
        }}>
          В корзину
        </Link>
      </div>
    </S.Product>
  );
}
