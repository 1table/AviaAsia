import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div className='main-header'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to={'/'} class="navbar-brand" href="#">logo</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={'/'} class="nav-link" >Главная</Link>
              </li>
              <li class="nav-item">
                <Link to={'/about'} class="nav-link" >О нас</Link>
              </li>
            </ul>
          </div>
        </nav>

    </div>
  )
}

export default Header



