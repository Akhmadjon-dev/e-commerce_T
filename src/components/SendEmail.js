import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi';
import { Signup } from "../style/index";
import SignUp from './SignUp';


export default class SendEmail extends Component {
    render() {
        return (
            < Signup >
                <div className='sendEmail'>
                    <div className='header'>
                        <MdClose onClick={this.props.modalHandler} className='close' />
                        <HiOutlineMail className='email' />
                        <h4>Подпишитесь на нашу рассылку и получите промокод на 500 RUB!</h4>
                    </div>
                    <div className='inputs'>
                        <div>
                            <HiOutlineMail className='kalit' />
                            <input type='email' placeholder='E-mail' />
                        </div>
                    </div>
                    <button className='email__button'>Отправить</button>
                </div>
            </Signup >
        )
    }
}
