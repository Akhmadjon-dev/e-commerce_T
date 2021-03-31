import React, { Component, useContext, useState } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'
import Basket from './Basket3'
import Joi from "joi-browser";
import { Link } from 'react-router-dom'
import { Context } from '../../store/context'
import { UserContext } from '../../store/userContext'


export default function Basket2() {
    const { context, setContext } = useContext(Context);
    const [usercontext, setUsercontext] = useContext(UserContext);
    const [isShow, setIsShow] = useState(false);
    const [noShow, setNoShow] = useState(false);
    const [data, setData] = useState({ rayon: '', address: "", pul__turi: "" })
    const [errors, setErrors] = useState({})
    // const modalHandler = () => {
    //     setIsShow(!isShow)
    // }
    // const nomodalHandler = () => {
    //     setNoShow(!noShow)
    // }


    const schema = {
        phone: Joi.string().required().label("Name"),
        password: Joi.string().required().label("TextArea"),
    };

    const inputHandler = ({ target: input }) => {
        const error = { ...errors };

        const errorMsg = validateProperty(input);

        if (errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];

        const dat = { ...data };
        dat[input.name] = input.value;
        setData(dat);
        setErrors(error);
    };

    const validateProperty = ({ name, value }) => {
        if (name === "rayon") {
            if (value.trim() === "") return "Rayon is required";
        }
        if (name === "address") {
            if (value.trim() === "") return "Address is required";
        }
        if (name === "pul__turi") {
            if (value.trim() === "") return "puli turi is required";
        }
    };

    const validate = () => {
        const { error } = Joi.validate(data, schema, {
            abortEarly: false,
        });

        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    const formHandler = (e) => {
        e.preventDefault();

        // const errors = validate();
        // setErrors(errors || {});

        // if (errors) return;
        setUsercontext({ ...usercontext, useraddress: data })
        setIsShow(!isShow)
        console.log(usercontext, 'formHandlerrrrrrrrrrrrrrr')

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
            {isShow ? <Basket /> : <main>
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
                                <strong>Доставка</strong>
                                <strong>0 ₽ </strong>
                                <strong>700 ₽</strong>
                            </div>
                        </div>
                    </div>
                </aside>
                <article>
                    <form onSubmit={formHandler}>
                        <p>
                            <label>Район доставки</label>
                            <select name='rayon' onChange={inputHandler}>
                                <option>Выбрать</option>
                                <option value='bogot'>Bogot</option>
                                <option value='xiva'>Xiva</option>
                                <option value='xonqa'>Xonqa</option>
                                <option value='urganch'>Urganch</option>
                                <option value='shovot'>Shovot</option>
                            </select>
                            <p>{errors.rayon}</p>
                        </p>
                        <p>
                            <label>ФИО</label>
                            <input
                                type="text"
                                placeholder='Введите Ваше полное имя'
                                name='name'
                                readOnly
                                value={usercontext.personal.ism}
                            />

                        </p>
                        <p>
                            <label>Телефон</label>
                            <input
                                type="tel"
                                placeholder='+380'
                                name='phone'
                                readOnly
                                value={usercontext.user.phone}
                            />

                        </p>
                        <p>
                            <label>Адрес доставки</label>
                            <input
                                type="text"
                                placeholder='Введите адрес доставки'
                                name='address'
                                value={data.address}
                                onChange={inputHandler}
                            />
                            <p>{errors.address}</p>
                        </p>
                        <p>
                            <label>Способ оплаты</label>
                            <select name='pul__turi' onChange={inputHandler}>
                                <option>Выбрать</option>
                                <option value='naqd'>naqd pul</option>
                                <option value='plastik'>plastik</option>
                            </select>
                            <p>{errors.pul__turi}</p>
                        </p>
                        <button type='submit'>Оформить заказ</button>
                    </form>
                </article>
            </main>}

        </ContentApp>
    )

}
