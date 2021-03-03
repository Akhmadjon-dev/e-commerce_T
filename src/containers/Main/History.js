import React, { Component } from 'react'
import { ContentApp } from '../../style'
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
                <div className='main'>
                    <div className='aside'>
                        <div className='text'>
                            <p>Номер заказа: <pre style={{ color: '#00AC4E' }}>Заказ №2334678954</pre></p>
                            <p>Способ оплаты:<span>Банковская карта</span></p>
                            <p>Дата заказа:<span>19.05.2020</span></p>
                            <p>Дата доставки:<span>23.05.2020</span></p>
                            <p>Статус заказа:<pre style={{ color: '#00AC4E' }}>Доставлен</pre></p>
                        </div>
                        <div>
                            <div className='box'>

                                <img src={image} alt='' />
                                <p>Хачапури</p>
                                <div className='button'>
                                    <p>1шт</p>
                                </div>
                                <strong>350 ₽</strong>
                            </div>
                            <div className='box'>
                                <img src={image} alt='' />
                                <p>Хачапури</p>
                                <div className='button'>
                                    <p>1шт</p>
                                </div>
                                <strong>350 ₽</strong>
                            </div>
                        </div>
                    </div>
                    <article>

                    </article>
                </div>
            </ContentApp>
        )
    }
}
