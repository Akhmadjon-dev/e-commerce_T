import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { VscKey } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { Signin } from "../style/index";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Signin>
                <div className='sign'>
                    <div className='header'>
                        <div onClick={this.props.changeHandler}><MdClose className='close' /></div>
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
                    </div>
                    <Link className='link'>Забыли пароль?</Link>
                    <button>Войти</button>
                    <p>Впервые у нас? Зарегистрироваться</p>
                </div>
            </Signin>
        )
    }
}
