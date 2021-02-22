import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { VscKey } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import SignUp from './SignUp'
import { Signin } from "../style/index";

export default class SignIn extends Component {
    state = {
        isShow: false
    }
    modalHandler = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    }

    render() {
        const { isShow } = this.state;
        return (
            < Signin >
                {isShow ? <SignUp closeHandler={this.modalHandler} /> : <div className='sign'>
                    <div className='header'>
                        <MdClose onClick={this.props.changeHandler} className='close' />
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
                    <button className='signin__button' >Войти</button>
                    <p className='signin__p'>Впервые у нас?<Link onClick={this.modalHandler}>Зарегистрироваться </Link></p>
                </div>}

            </Signin >
        )
    }
}
