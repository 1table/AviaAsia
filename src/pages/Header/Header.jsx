import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="main-block">
        <a href="" className="logo">logo</a>
        <nav className="nav_link">
            <Link to="Главная" className='nav_link-item'>Главная</Link>
            <Link to="О нас" className='nav_link-item'>О нас</Link>
            <Link to="Контакты" className='nav_link-item'>Контакты</Link>
        </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
