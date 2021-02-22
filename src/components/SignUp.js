import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { VscKey } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { Signup } from "../style/index";
import SendEmail from './SendEmail'

export default class SignUp extends Component {
    state = {
        isShow: false
    }
    modalHandler = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }))
    }
    render() {
        const { isShow } = this.state;
        return (
            <Signup>
                {isShow ? <SendEmail modalHandler={this.modalHandler} /> :
                    <div className='sign__up'>
                        <div className='header'>
                            <MdClose onClick={this.props.closeHandler} className='close' />
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
                                <p className='radio__p'>Хочу получать выгодные предложения от магазина</p>
                            </div>
                            <div className='radio__input'>
                                <input type='radio' />
                                <p className='radio__p'>Принимаю условия Пользовательского соглашения</p>
                            </div>
                        </form>
                        <button className='signup__button' onClick={this.modalHandler}>Зарегистрироваться</button>
                    </div>}

            </Signup>
        )
    }
}
