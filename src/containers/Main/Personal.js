import React, { useContext, useState } from 'react'
import { ContentApp } from '../../style'
import Story from './History'
import image from '../../assets/img/main/image.png'
import DATA from '../../assets/img/main/data.png'
import history from '../../assets/img/main/history.png'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../store/userContext'


export default function Personal() {
    const [usercontext, setUsercontext] = useContext(UserContext);
    const [isShow, setIsShow] = useState(false);
    const [personal, setPersonal] = useState({ ism: "", familiya: "", otch: '', email: '' });


    const inputHandler = ({ target: input }) => {
        const dat = { ...personal };
        dat[input.name] = input.value;
        setPersonal(dat)
    }

    const formHandler = (e) => {
        e.preventDefault();

        setUsercontext({ ...usercontext, personal })
        console.log(usercontext)
    }

    return (
        <ContentApp>
            {isShow ? (<Story></Story>) : <><div className='top'>
                <div className='history' >
                    <img src={history} />
                </div>
                <NavLink to='/data' className='data' >
                    <img src={DATA} />
                </NavLink>

            </div>
                <main>

                    <aside>
                        <div className='basket'>
                            <h2>Персональная информация</h2>
                            <form onSubmit={formHandler}>
                                <div className='boxx'>
                                    <img src={image} alt='' />
                                    <p>Загрузить фотографию</p>
                                </div>
                                <div className='boxxx'>
                                    <p className='boxxx__p'>
                                        <label>Ваше имя</label>
                                        <input
                                            type='text'
                                            name='ism'
                                            placeholder='Имя'
                                            onChange={inputHandler}
                                        />
                                    </p>
                                    <p className='boxxx-p' style={{ marginLeft: '30px' }}>
                                        <label>Ваша фамилия</label>
                                        <input
                                            type='text'
                                            name='familiya'
                                            placeholder='Фамилия'
                                            onChange={inputHandler}
                                        />
                                    </p>
                                </div>
                                <div className='boxxx'>
                                    <p className='boxxx__p'>
                                        <label>Ваше отчество</label>
                                        <input
                                            type='text'
                                            name='otch'
                                            placeholder='отчество'
                                            onChange={inputHandler}
                                        />
                                    </p>
                                </div>
                                <div className='boxxx'>
                                    <p className='boxxx__p'>
                                        <label>Адрес электронной почты</label>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            onChange={inputHandler}
                                        />
                                    </p>
                                </div>
                                <button>Submit</button>
                            </form>
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
                </main></>}
        </ContentApp>
    )
}
