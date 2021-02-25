import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { MdClose } from 'react-icons/md'
import image from '../../assets/img/main/image.png'


export default class Basket3 extends Component {
    state = {
        isShow: false,
        count: 0,
        count2: 0,
        box: true,
        box2: true
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
    render() {
        const { isShow, count, count2, box, box2 } = this.state;
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
                        <form action=''>
                            <p>
                                <label>ФИО</label>
                                <input type="text" placeholder='Введите Ваше полное имя' />
                            </p>
                            <p>
                                <label>Телефон</label>
                                <input type="tel" placeholder='+380' />
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
