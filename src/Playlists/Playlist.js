import React from 'react'

export const Playlist = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div class='col s12 m6 l6'>
            <div class='card medium animated rollIn animation-delay-200'>
              <div class='card-image'>
                <img src={require('./assets/images/sky.jpeg')} alt='' />
                <span class='card-title'>California Magic Playlist</span>
              </div>
              <a href='https://itunes.apple.com/us/playlist/california-magic/pl.b736f084b649410d9dcc9554a7d691e9' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a>
              <div class='card-content'>
                <p>My own personal playlist including multiple genres of EDM and some alternative tracks.</p>
              </div>
            </div>
          </div>
          <div class='col s12 m6 l6'>
            <div class='card medium animated rollIn animation-delay-400'>
              <div class='card-image'>
                <img src={require('./assets/images/sky.jpeg')} alt='' />
                <span class='card-title'>Dance/EDM Replay</span>
              </div>
              <a href='https://itunes.apple.com/us/playlist/dance-edm-replay/pl.a342f7575bef42419401cd0618e0956aclass=' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a>
              <div class='card-content'>
                <p>Apple trackss take on recent Dance/EDM hits.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div class='col s12 m6 l6'>
            <div class='card medium animated rollIn animation-delay-600'>
              <div class='card-image'>
                <img src={require('./assets/images/sky.jpeg')} alt='' />
                <span class='card-title'>Avicii Essentials</span>
              </div>
              <a href='https://itunes.apple.com/us/playlist/avicii-essentials/pl.d29a376c60b6430d9efff225cce78fa2' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a>
              <div class='card-content'>
                <p>The artist who delivered us "Wake Me Up" and "Levels".</p>
              </div>
            </div>
          </div>
          <div class='col s12 m6 l6'>
            <div class='card medium animated rollIn animation-delay-800'>
              <div class='card-image'>
                <img src={require('./assets/images/sky.jpeg')} alt='' />
                <span class='card-title'>The A-List: Dance</span>
              </div>
              <a href='https://itunes.apple.com/us/playlist/the-a-list-dance/pl.6bf4415b83ce4f3789614ac4c3675740' class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a>
              <div class='card-content'>
                <p>The genres top hits, updated regularly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
