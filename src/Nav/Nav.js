import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper blue-grey darken-4'>
          <Link to='/' className='brand-logo center'>
            <span>TODAYS&rsquo; EDM</span>
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><Link to='/tracks'>Tracks</Link></li>
            <li><Link to='/playlist'>Playlists</Link></li>
            <li><Link to='/About'>About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
