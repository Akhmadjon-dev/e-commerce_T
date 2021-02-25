import React, { Component } from 'react'
import { ContentApp } from "../../style/index";
import { MdClose } from 'react-icons/md'
import bonus from '../../assets/img/main/Group.png'
import delivery from '../../assets/img/main/delivery.png'
import { Link } from 'react-router-dom';
import Basket2 from "./Basket2";
import image from '../../assets/img/main/image.png'

export default class Basket extends Component {
    state = {
        isShow: false,
        count: 0,
        count2: 0
    }
    modalHandler = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    }
    incrementHandle = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrementHandle = () => {
        this.setState({ count: this.state.count - 1 })
    }
    incrementHandle2 = () => {
        this.setState({ count2: this.state.count2 + 1 })
    }
    decrementHandle2 = () => {
        this.setState({ count2: this.state.count2 - 1 })
    }
    render() {
        const { isShow, count, count2 } = this.state;
        return (
            <ContentApp>
                {isShow ? <Basket2
                /> : <div><article>
                    <div className='basket'>
                        <div className='box'>
                            <h3>Корзина</h3>
                        </div>
                        <div className='box'>
                            <MdClose />
                            <img src={image} alt='' />
                            <p>Хачапури</p>
                            <div className='button'>
                                <p onClick={this.decrementHandle} style={{ cursor: 'pointer' }}>-</p>
                                <p>{count > 0 ? count : 0}</p>
                                <p onClick={this.incrementHandle} style={{ cursor: 'pointer' }}>+</p>
                            </div>
                            <strong>350 ₽</strong>
                        </div>
                        <div className='box'>
                            <MdClose />
                            <img src={image} alt='' />
                            <p>Хачапури</p>
                            <div className='button'>
                                <p onClick={this.decrementHandle2} style={{ cursor: 'pointer' }}>-</p>
                                <p>{count2 > 0 ? count2 : 0}</p>
                                <p onClick={this.incrementHandle2} style={{ cursor: 'pointer' }}>+</p>
                            </div>
                            <strong>350 ₽</strong>
                        </div>
                    </div>
                    <div className='sell'>
                        <strong style={{ marginLeft: '5%', marginBottom: '20px' }}>Заказ №47593</strong>
                        <div className='basket__price'>
                            <span>Товаров в корзине</span>
                            <strong>700 ₽</strong>
                        </div>
                        <div className='basket__price'>
                            <span>Промокод</span>
                            <strong>- 100  ₽</strong>
                        </div>
                        <div className='basket__price2'>
                            <span>Итого к оплате</span>
                            <strong>600 ₽</strong>
                        </div>
                        <div className='basket__price'>
                            <button className='basket__button'>Оформить заказ</button>
                        </div>
                    </div>

                </article>
                        <aside>
                            <div className='basket__rek'>
                                <p style={{ textAlign: 'center' }}>Закажите на 3000 RUB и получите</p>
                                <div className='bonus'>
                                    <img src={bonus} alt='' />
                                    <p><strong>30 RUB</strong> на бонусный счет</p>
                                </div>
                                <div className='bonus'>
                                    <img src={delivery} alt='' />
                                    <strong>Бесплатная доставка</strong>
                                </div>
                                <span><strong>1000 </strong>(минимальный заказ)</span>
                                <div className='range'> 0<input type='range' min='1' max='50' value='25' />3000</div>
                                <span>Осталось 1988 RUB до бесплатной доставки</span>
                            </div>
                            <div className='promokod'>
                                <h4>Промокод</h4>
                                <div className='basket__input'>
                                    <input type='number' placeholder='Введите промокод' />
                                    <button onClick={this.modalHandler}>Подтвердить</button>
                                </div>
                            </div>
                        </aside></div>}

            </ContentApp>
        )
    }
}
