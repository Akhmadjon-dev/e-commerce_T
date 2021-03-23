import React, { Component, useContext } from 'react'
import { ContentApp } from '../../style'
import image from '../../assets/img/main/image.png'
import data2 from '../../assets/img/main/data2.png'
import history2 from '../../assets/img/main/history2.png'
import { NavLink } from 'react-router-dom'
import { Context } from '../../store/context'



export default function Personal() {
    const [context, setContext] = useContext(Context)

    return (
        <ContentApp>
            <div className='top'>
                <NavLink to='/cart' className='data2'>
                    <img src={history2} />
                </NavLink>
                <div className='history'>
                    <img src={data2} />
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
                        {context.map(item => (
                            <div className='box'>

                                <img src={item.img} alt='' />
                                <p>{item.title}</p>
                                <div className='button'>
                                    <p>1шт</p>
                                </div>
                                <strong>{item.price} ₽</strong>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='article'>
                    <div className='text'>
                        <p>Номер заказа: <pre style={{ color: '#00AC4E' }}>Заказ №2334678954</pre></p>
                        <p>Способ оплаты:<span>Банковская карта</span></p>
                        <p>Дата заказа:<span>19.05.2020</span></p>
                        <p>Дата доставки:<span>23.05.2020</span></p>
                        <p>Статус заказа:<pre style={{ color: 'red' }}>Отменен</pre></p>
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
            </div>
        </ContentApp>
    )
}