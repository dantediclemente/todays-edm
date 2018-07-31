import React, { Component } from 'react'
import './assets/stylesheets/App.css'

import { Nav } from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {MainContainer} from './containers/MainContainer'
import { MusicContainer } from './containers/MusicContainer'
import { PlaylistContainer } from './containers/PlaylistContainer'
import { NewsContainer } from './containers/NewsContainer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/music' component={MusicContainer} />
          <Route exact path='/playlist' component={PlaylistContainer} />
          <Route exact path='/news' component={NewsContainer} />
        </div>
      </Router>
    )
  }
}

export default App
