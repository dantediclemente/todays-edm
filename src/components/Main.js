import React from 'react'

const styles = {
  transition: 'all 1s ease-out'
}

export class Main extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo'>Todays&rsquo; EDM</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><a href='/music'>Music</a></li>
              <li><a href='/playlist'>Playlists</a></li>
              <li><a href='/news'>News</a></li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          <div className='row'>
            <div className='s12' />
          </div>

          <div className='row'>
            <div className='s8 offset-s2 center-align'>
              <div className='card green accent-4 z-depth-2'
                style={{...styles, opacity: this.props.opacity, transform: 'scale(' + this.props.scale + ')'}}>
                <div className='card-content white-text'>
                  <span className='card-title'>Title</span>
                </div>

                <div className='card-action'>
                  <a onClick={this.props.handleHide}>HIDE</a>
                  <a onClick={this.props.handleScale}>SCALE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
