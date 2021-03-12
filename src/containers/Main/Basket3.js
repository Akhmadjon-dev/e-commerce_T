import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'
import Joi from "joi-browser";


export default class Basket3 extends Component {
    state = {
        isShow: false,
        count: 0,
        count2: 0,
        box: true,
        box2: true,
        data: { name: "", phone: "" },
        errors: {},

    }
    modalHandler = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    }
    showHandler = () => {
        this.setState({ box: false })
    }
    showHandler2 = () => {
        this.setState({ box2: false })
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

    schema = {
        phone: Joi.string().required().label("Name"),
        password: Joi.string().required().label("TextArea"),
    };

    inputHandler = ({ target: input }) => {
        const errors = { ...this.state.errors };

        const errorMsg = this.validateProperty(input);

        if (errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];

        console.log(errors, "input error");
        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
        console.log(this.state.data);
    };

    validateProperty = ({ name, value }) => {
        if (name === "fio") {
            if (value.trim() === "") return "FIO is required";
        }
        if (name === "phone") {
            if (value.trim() === "") return "Phone is required";
        }
    };

    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, {
            abortEarly: false,
        });

        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    formHandler = (e) => {
        e.preventDefault();

        const errors = this.validate();

        console.log(errors, "errors coming!!!!");

        this.setState({ errors: errors || {} });

        if (errors) return;

        console.log("form submitted");
    };
    render() {
        const { isShow, count, count2, box, box2, data, errors } = this.state;
        console.log(this.state)
        return (
            <ContentApp>
                <main>
                    <aside>
                        <div className='basket'>
                            <h2>Оформление заказа</h2>
                            <h3>Вы заказали:</h3>
                            {box && <div className='box'>
                                <MdClose onClick={this.showHandler} />
                                <img src={image} alt='' />
                                <p>Хачапури</p>
                                <div className='button'>
                                    <p onClick={this.decrementHandle} style={{ cursor: 'pointer' }}>-</p>
                                    <p>{count > 0 ? count : 0}</p>
                                    <p onClick={this.incrementHandle} style={{ cursor: 'pointer' }}>+</p>
                                </div>
                                <strong>350 ₽</strong>
                            </div>}
                            <div className='box'>
                                <MdClose onClick={this.showHandler2} />
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
                        <form action='' onSubmit={this.formHandler}>
                            <p>
                                <label>ФИО</label>
                                <input
                                    type="text"
                                    placeholder='Введите Ваше полное имя'
                                    name='fio'
                                    autoFocus
                                    value={data.name}
                                    onChange={this.inputHandler}
                                />
                                <p>{errors.name}</p>
                            </p>
                            <p>
                                <label>Телефон</label>
                                <input
                                    type="tel"
                                    placeholder='+380'
                                    name='phone'
                                    value={data.phone}
                                    onChange={this.inputHandler}
                                />
                                <p>{errors.phone}</p>
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
