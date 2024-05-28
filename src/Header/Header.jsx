import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={'/Главная'} class="nav-link" >Главная</Link>
              </li>
              <li class="nav-item">
                <Link to={'/О нас'} class="nav-link" >О нас</Link>
              </li>
            </ul>
          </div>
        </nav>

    </div>
  )
}

export default Header



