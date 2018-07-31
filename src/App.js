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
            <Redirect to='/tracks' />
          )
          } />
          <Route exact path='/tracks' component={TracksContainer} />
          <Route exact path='/playlist' component={PlaylistsContainer} />
          <Route exact path='/About' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
