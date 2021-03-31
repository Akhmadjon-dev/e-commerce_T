import React, { Component, useContext, useState } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'
import Joi from "joi-browser";
import { Context } from '../../store/context';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../store/userContext';


export default function Basket3() {
    const history = useHistory();
    console.log(history)
    const { context, setContext } = useContext(Context);
    const [usercontext, setUsercontext] = useContext(UserContext);
    const [data, setData] = useState('')

    const inputHandler = ({ target: input }) => {
        const dat = input.value;
        setData(dat)
        console.log(data)

    };


    const formHandler = (e) => {
        e.preventDefault();
        setUsercontext({ ...usercontext, useraddress: { ...usercontext.useraddress, pul__turi: data } })
        console.log(usercontext)

    };
    const filterHandler = (id) => {
        const result = context.filter((item) => item.id !== id);
        setContext(result);
    };

    const decrement = (id) => {
        const updated = context.find((item) => item.id === id);
        let result = [...context];
        updated.size > 0 ? (updated.size -= 1) : (updated.size = 0);
        let index = result.indexOf(updated);
        result.splice(index, 1, updated);
        setContext(result);
    };
    const increment = (id) => {
        const updated = context.find((item) => item.id === id);
        let result = [...context];
        updated.size += 1;
        // updated.size >= 0 ? updated.size += 1 : updated.size = 0
        let index = result.indexOf(updated);
        result.splice(index, 1, updated);
        setContext(result);
    };

    return (
        <ContentApp>
            <main>
                <aside>
                    <div className='basket'>
                        <h2>Оформление заказа</h2>
                        <h3>Вы заказали:</h3>
                        {context.map((item) => (
                            <div className="box">
                                <MdClose onClick={() => filterHandler(item.id)} />
                                <img src={item.img} alt="" />
                                <Link
                                    to={{
                                        pathname: "/cart",
                                        id: item.id,
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    {item.title}
                                </Link>
                                <div className="button">
                                    <p
                                        onClick={() => decrement(item.id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        -
                    </p>
                                    <p>{item.size}</p>
                                    <p
                                        onClick={() => increment(item.id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        +
                    </p>
                                </div>
                                <strong>{item.size * item.price} ₽</strong>
                            </div>
                        ))}
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
                    <form action='' onSubmit={formHandler}>
                        <p>
                            <label>ФИО</label>
                            <input
                                type="text"
                                // placeholder='Введите Ваше полное имя'
                                name='fio'
                                value={usercontext.personal.familiya, usercontext.personal.ism, usercontext.personal.otch}
                            />
                        </p>
                        <p>
                            <label>Телефон</label>
                            <input
                                type="tel"
                                placeholder='+380'
                                name='phone'
                                value={usercontext.user.phone}
                            />
                        </p>
                        <p>
                            <label>Когда заберете?</label>
                            <select name='pul__turi' onChange={inputHandler}>
                                <option value='naqd'>naqd</option>
                                <option value='plastik'>plastik</option>
                            </select>
                        </p>
                        <button onClick={history.push('/data')}>Оформить заказ</button>
                    </form>
                </article>
            </main>
        </ContentApp>
    )
}
