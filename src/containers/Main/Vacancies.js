import React, { Component } from 'react'
import { ContentApp } from '../../style'
import { BsArrowRightShort } from 'react-icons/bs'

export default class Vacancies extends Component {
    render() {
        return (
            <ContentApp>
                <div className='main'>
                    <h3>Вакансии</h3>
                    <div className='vacan'>
                        <strong>
                            Повар
                        </strong>
                        <p><span>Требования:</span> опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.</p>
                        <p><span>Условия:</span> Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.</p>
                    </div>
                    <div className='vacan'>
                        <strong>
                            Повар
                        </strong>
                        <p><span>Требования:</span> опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.</p>
                        <p><span>Условия:</span> Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.</p>
                    </div>
                    <div className='vacan'>
                        <strong>
                            Повар
                        </strong>
                        <p><span>Требования:</span> опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.</p>
                        <p><span>Условия:</span> Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.</p>
                    </div>
                    <div className='dostavka__button'>
                        <button className='katalog'>В каталог</button>
                        <div className='oplate'>
                            <p>О доставке</p>
                            <BsArrowRightShort className='arrow' />
                        </div>
                    </div>

                </div>
            </ContentApp>
        )
    }
}
