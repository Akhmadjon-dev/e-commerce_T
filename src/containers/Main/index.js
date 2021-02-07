import React, { Component } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Product from '../../components/Product';
import S from '../../style/pages/main';
import photo from '../../assets/img/banner/image.jpg'
import photo2 from '../../assets/img/banner/image2.png'
import video__banner from '../../assets/img/banner/video__banner.png'
import { Link } from 'react-router-dom';

export default class Main extends Component {
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
                        <Link className='link' to='/supi'>СУПЫ</Link >
                        <Link className='link'>ХАЧАПУРИ</Link >
                        <Link className='link'>ХАЧАПУРИ</Link >
                        <Link className='link'>ХАЧАПУРИ</Link >
                        <Link className='link'>ХАЧАПУРИ</Link >
                        <IoIosArrowForward className='bigger' />
                    </div>
                    <div className="main__products">
                        <div className="main__products__title">
                            <h3>Все товары</h3>
                        </div>
                        <div className="main__products__list">
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
                            <Product />
                        </div>

                    </div>
                    <div className='video__banner'>
                        <img src={video__banner} alt='' />
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
        )
    }
}
