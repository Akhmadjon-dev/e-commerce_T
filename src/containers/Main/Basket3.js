import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'


export default class Basket3 extends Component {
    render() {
        return (
            <ContentApp>
                <main>
                    <aside>
                        <div className='basket'>
                            <h2>Оформление заказа</h2>
                            <h3>Вы заказали:</h3>
                            <div className='box'>
                                <MdClose />
                                <img src={image} alt='' />
                                <p>Хачапури</p>
                                <div className='button'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <strong>350 ₽</strong>
                            </div>
                            <div className='box'>
                                <MdClose />
                                <img src={image} alt='' />
                                <p>Хачапури</p>
                                <div className='button'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <strong>350 ₽</strong>
                            </div>
                        </div>
                        <div className='basket__bottom'>
                            <div className='dostavka'>
                                <button>Доставка</button>
                                <span>Самовывоз (- 20%)</span>
                            </div>
                            <div className='boxs'>
                                <div className='hisob'>
                                    <strong>Итого</strong>
                                    <strong>700 ₽ </strong>
                                    <strong>Итого к оплате</strong>
                                </div>
                                <div className='hisob'>
                                    <strong>Самовывоз</strong>
                                    <strong>-140  ₽ </strong>
                                    <strong>560 ₽</strong>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article>
                        <form action=''>
                            <p>
                                <label>ФИО</label>
                                <input type="text" placeholder='Введите Ваше полное имя' />
                            </p>
                            <p>
                                <label>Телефон</label>
                                <input type="tel" placeholder='+380' />
                            </p>
                            <p>
                                <label>Когда заберете?</label>
                                <select>
                                    <option>В ближайшее время</option>
                                    <option>plastik</option>
                                </select>
                            </p>
                            <button>Оформить заказ</button>
                        </form>
                    </article>
                </main>
            </ContentApp>
        )
    }
}
