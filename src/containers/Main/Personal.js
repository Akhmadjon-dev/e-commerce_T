import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'
import data from '../../assets/img/main/data.png'
import history from '../../assets/img/main/history.png'


export default class Personal extends Component {
    render() {
        return (
            <ContentApp>
                <div className='top'>
                    <div className='history'>
                        <img src={history} />
                    </div>
                    <div className='data'>
                        <img src={data} />
                    </div>

                </div>
                <main>

                    <aside>
                        <div className='basket'>
                            <h2>Персональная информация</h2>
                            <div className='boxx'>
                                <img src={image} alt='' />
                                <p>Загрузить фотографию</p>
                            </div>
                            <div className='boxxx'>
                                <p className='boxxx__p'>
                                    <label>Ваше имя</label>
                                    <input type='text' name='ism' placeholder='Имя' />
                                </p>
                                <p className='boxxx-p' style={{ marginLeft: '30px' }}>
                                    <label>Ваша фамилия</label>
                                    <input type='text' name='familiya' placeholder='Фамилия' />
                                </p>
                            </div>
                            <div className='boxxx'>
                                <p className='boxxx__p'>
                                    <label>Ваше отчество</label>
                                    <input type='text' name='ism' placeholder='отчество' />
                                </p>
                            </div>
                            <div className='boxxx'>
                                <p className='boxxx__p'>
                                    <label>Адрес электронной почты</label>
                                    <input type='text' name='ism' placeholder='Email' />
                                </p>
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
