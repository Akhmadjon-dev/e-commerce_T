import React, { Component } from 'react'
import S from '../style/pages/product'
import { RiStarSFill } from "react-icons/ri";
import productImage from '../assets/img/main/productImage.png'
import { Link } from 'react-router-dom';
export default class Product extends Component {
    render() {
        return (
            <S.Product>
                <div className="item">
                    <div className="image">
                        <img src={productImage} alt='' />
                    </div>
                    <h4>Голень Говядины</h4>
                    <p>Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить.</p>
                    <span>
                        <RiStarSFill className='activeStar' />
                        <RiStarSFill className='activeStar' />
                        <RiStarSFill className='activeStar' />
                        <RiStarSFill className='activeStar' />
                        <RiStarSFill className='noactiveStar' />
                    </span>
                    <div className="item__price">
                        <h4>1 050 ₽/кг</h4>
                        <p>За 500гр.</p>
                    </div>
                    <Link className='button' to='/content'>В корзину</Link>
                </div>
            </S.Product>
        )
    }
}
