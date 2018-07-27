import React from 'react'

export class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <div className='nav-wrapper blue-grey darken-4'>
            <a href='/' className='brand-logo center'>
              <span>TODAYS&rsquo; EDM</span>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><a href='/music'>Music</a></li>
              <li><a href='/playlist'>Playlists</a></li>
              <li><a href='/news'>News</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
