import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { RiStarSFill } from 'react-icons/ri'
import { Signin } from "../style/index";


export default class Reviews extends Component {
    render() {
        return (
            < Signin >
                <div className='review'>
                    <div className='header'>
                        <MdClose onClick={this.props.closeHandler} className='close' />
                        <h4>Добавить отзыв</h4>
                        <div className='like'>
                            <p>Ваша оценка:</p>
                            <span>
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                            </span>
                        </div>

                    </div>
                    <div className='review__inputs'>
                        <div>
                            <label>Ваше имя:</label>
                            <input type='text' placeholder='Введите Ваше имя' />
                        </div>
                        <div >
                            <label>Ваш отзыв:</label>
                            <textarea rows='5' cols='26' style={{ resize: 'none', outline: 'none' }} />
                        </div>
                    </div>
                    <button className='review__button' >Добавить отзыв</button>
                </div>
            </Signin >
        )
    }
}
