import React, { Component } from 'react'
import './App.css'

import { Nav } from './Nav/Nav'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { TracksContainer } from './Tracks/TracksContainer'
import { PlaylistsContainer } from './Playlists/PlaylistsContainer'
import { About } from './About/About'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' render={() => (
            <Redirect to='/todays-edm/tracks' />
          )
          } />
          <Route exact path='/todays-edm' render={() => (
            <Redirect to='/todays-edm/tracks' />
          )
          } />
          <Route exact path='/todays-edm/tracks' component={TracksContainer} />
          <Route exact path='/todays-edm/playlist' component={PlaylistsContainer} />
          <Route exact path='/todays-edm/About' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
