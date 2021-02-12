import { Deliver } from '../../style'

import React, {useState} from 'react'

const Support = () => {
    const [data, setData]= useState(null);
    const [name, setName]= useState('jamshid');
   
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(name,data)
    }
    const inputHandler= (e) =>{
      setName(e.target.value)
      console.log(name, 'input')
    }
    return (
        <Deliver>
            <div className='dostavka'>
                <h1 onClick={() => setData('salom')}>Поддержка</h1>
                <form onSubmit={submitHandler} action=''>
                    <input onChange={inputHandler} type='text' placeholder='Напишите сообщение...' />
                    {/* <textarea onChange={(e) => setName(e.target.value)} rows="20" cols="120" type='text' placeholder='Напишите сообщение...' /> */}
                    <div className='dostavka__button'>
                        <button  className='katalog'>Отправить</button>
                    </div>
                </form>
                <p>
                   value: {name}
                </p>

            </div>
        </Deliver >
    )
}

export default Support

