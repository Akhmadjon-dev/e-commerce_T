import React, { Component } from 'react'
import S from '../style/pages/product'
import { RiStarSFill } from "react-icons/ri";
import noimage from '../assets/img/main/noimage.png'
import vektor from '../assets/img/main/Vector.png'
import vektor1 from '../assets/img/main/Vector1.png'
import vektor2 from '../assets/img/main/Vector2.png'

export default class Product extends Component {
    render() {
        return (
            <S.Product>
                <div className="item">
                    <div className="image">
                        <img className="relative" src={noimage} alt="" />
                        <img className="absolute" src={vektor} alt="" />
                        <img className="absolute1" src={vektor1} alt="" />
                        <img className="absolute2" src={vektor2} alt="" />
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
                    <button>В корзину</button>
                </div>
            </S.Product>
        )
    }
}
