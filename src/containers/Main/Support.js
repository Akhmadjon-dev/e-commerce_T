import React, { Component } from 'react'

import { Deliver } from '../../style'

export default class Support extends Component {
    render() {
        return (
            <Deliver>
                <div className='dostavka'>
                    <h1>Поддержка</h1>
                    <form action=''>
                        <textarea type='text' placeholder='Напишите сообщение...' />
                        <div className='dostavka__button'>
                            <button className='katalog'>Отправить</button>
                        </div>
                    </form>
                </div>
            </Deliver >
        )
    }
}


