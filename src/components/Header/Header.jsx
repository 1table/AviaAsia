import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className="main-header">
            <nav className="main-nav">
                <Link to={'/'}><img className='logo' src={logo} alt="logo" /></Link>
                {/* <Link to={'/'}>logo</Link> */}
                <div className="nav-links">
                    <Link to={'/'} className="nav-link">Главная</Link>
                    <Link to={'/about'} className="nav-link">О нас</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;