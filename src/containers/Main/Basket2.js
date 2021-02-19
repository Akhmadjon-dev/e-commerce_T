import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'


export default class Basket2 extends Component {
    state = {
        isShow: false
    }
    modalHandler = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    }
    render() {
        const { isShow } = this.state;
        console.log(this.state)
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
                                    <strong>Доставка</strong>
                                    <strong>0 ₽ </strong>
                                    <strong>700 ₽</strong>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article>
                        <form action=''>
                            <p>
                                <label>Район доставки</label>
                                <select placeholder='Выбрать'>
                                    <option>Bogot</option>
                                    <option>Xiva</option>
                                    <option>Xonqa</option>
                                    <option>Urganch</option>
                                    <option>Shovot</option>
                                </select>
                            </p>
                            <p>
                                <label>ФИО</label>
                                <input type="text" placeholder='Введите Ваше полное имя' />
                            </p>
                            <p>
                                <label>Телефон</label>
                                <input type="tel" placeholder='+380' />
                            </p>
                            <p>
                                <label>Адрес доставки</label>
                                <input type="text" placeholder='Введите адрес доставки' />
                            </p>
                            <p>
                                <label>Способ оплаты</label>
                                <select placeholder='Наличные'>
                                    <option>naqd pul</option>
                                    <option>plastik</option>
                                </select>
                            </p>
                            {isShow && <p >
                                <label>Адрес доставки</label>
                                <input type="text" placeholder='Введите адрес доставки' />
                            </p>}

                            {!isShow && <p className='link' onClick={this.modalHandler}>Добавить комментарий.</p>}
                            <button>Оформить заказ</button>
                        </form>
                    </article>
                </main>
            </ContentApp>
        )
    }
}
