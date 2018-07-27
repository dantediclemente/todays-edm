import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {MainContainer} from './containers/MainContainer'
import { MusicContainer } from './containers/MusicContainer'
import { PlaylistContainer } from './containers/PlaylistContainer'
import { NewsContainer } from './containers/NewsContainer'

ReactDOM.render(
  <Router>
    <div>
      <App />
      <Route exact path='/' component={MainContainer} />
      <Route path='/music' component={MusicContainer} />
      <Route path='/playlist' component={PlaylistContainer} />
      <Route path='/news' component={NewsContainer} />
    </div>
  </Router>, document.getElementById('root'))
registerServiceWorker()
