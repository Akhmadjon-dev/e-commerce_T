import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { VscKey } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { Signin } from "../style/index";

export default class SignUp extends Component {
    render() {
        return (
            <Signin>
                <div className='sign'>
                    <div className='header'>
                        <MdClose className='close' />
                        <BiUser className='user' />
                        <h4>Войти в личный кабинет</h4>
                    </div>
                    <div className='inputs'>
                        <div>
                            <FiPhone className='tel' />
                            <input type='tel' placeholder='Телефон' />
                        </div>
                        <div>
                            <VscKey className='kalit' />
                            <input type='password' placeholder='Пароль' />
                        </div>
                        <div>
                            <VscKey className='kalit' />
                            <input type='password' placeholder='Подтвердите пароль' />
                        </div>
                    </div>
                    <form action=''>
                        <div className='radio__input'>
                            <input type='radio' />
                            <p>Хочу получать выгодные предложения от магазина</p>
                        </div>
                        <div className='radio__input'>
                            <input type='radio' />
                            <p>Хочу получать выгодные предложения от магазина</p>
                        </div>
                    </form>

                    <button>Зарегистрироваться</button>
                    <p>Впервые у нас? Зарегистрироваться</p>
                </div>
            </Signin>
        )
    }
}
