import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main-block">
          <div className="text-block">
          <h1 className='first-text'>Дешёвые авиабилеты</h1>
          <h3 className=' second-text'>Помогаем вам экономить</h3>
          <div className="change-block">
            <span className="change-span"><input type='text' className='change-input1'/></span>
            <span className="change-span"><input type="text" className='change-input'/></span>
            <span className="change-span"><input type="text" className='change-input'/></span>
            <span className="change-span"><input type="text" className='change-input'/></span>
            <span className="change-span"><input type="text" className='change-input'/></span>
            <span className="change-span"><input type="text" className='change-input2'/></span>
          </div>
          <button className='btn'>Найти билеты</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
