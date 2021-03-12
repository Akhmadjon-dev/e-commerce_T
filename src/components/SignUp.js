import React, { Component } from 'react'
import Joi from "joi-browser";
import { MdClose } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { VscKey } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { Signup } from "../style/index";
import SendEmail from './SendEmail'

export default class SignUp extends Component {
    state = {
        isShow: false,
        data: { phone: "", password: "", againPassword: "" },
        errors: {},
    }

    schema = {
        phone: Joi.string().required().label("Phone"),
        password: Joi.string().required().label("Password"),
        againPassword: Joi.string().required().label("Password"),
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
        if (name === "phone") {
            if (value.trim() === "") return "Phone is required";
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required";
        }
        if (name === "againPassword") {
            if (value.trim() === "") return "Password is required";
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
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    };
    render() {
        const { isShow, data, errors } = this.state;
        return (
            <Signup>
                {isShow ? <SendEmail modalHandler={this.modalHandler} /> :
                    <form onSubmit={this.formHandler} className='sign__up'>
                        <div className='header'>
                            <MdClose onClick={this.props.closeHandler} className='close' />
                            <BiUser className='user' />
                            <h4>Войти в личный кабинет</h4>
                        </div>
                        <div className='inputs'>
                            <div>
                                <FiPhone className='tel' />
                                <input
                                    type='tel'
                                    placeholder='Телефон'
                                    onChange={this.inputHandler}
                                    autoFocus
                                    name='phone'
                                    value={data.phone}
                                />
                            </div>
                            <p>{errors.phone}</p>
                            <div>
                                <VscKey className='kalit' />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Пароль'
                                    onChange={this.inputHandler}
                                    value={data.password}
                                />
                            </div>
                            <p>{errors.password}</p>
                            <div>
                                <VscKey className='kalit' />
                                <input
                                    type='password'
                                    placeholder='Подтвердите пароль'
                                    name='againPassword'
                                    onChange={this.inputHandler}
                                    value={data.againPassword}

                                />
                            </div>
                            <p>{errors.againPassword}</p>
                        </div>
                        <form action=''>
                            <div className='radio__input'>
                                <input type='radio' />
                                <p className='radio__p'>Хочу получать выгодные предложения от магазина</p>
                            </div>
                            <div className='radio__input'>
                                <input type='radio' />
                                <p className='radio__p'>Принимаю условия Пользовательского соглашения</p>
                            </div>
                        </form>
                        <button className='signup__button' >Зарегистрироваться</button>

                    </form>}

            </Signup>
        )
    }
}
