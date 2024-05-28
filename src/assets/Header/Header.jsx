import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/support'>Support</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Header