import React from 'react'
import { Track } from './Track'

export class TracksContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tracks: []
    }
  }

  componentWillMount () {
    fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=house&api_key=7c67f7f89b94ae6d42802b719f75774d&format=json')
      .then(response => response.json())
      .then(data => this.setState({ tracks: data.tracks.track }))
  }

  render () {
    const { tracks } = this.state

    return (
      <div>
        <h4 class='collection-header center-align animated bounceInDown'>TOP HOUSE SONGS FROM LAST.FM</h4>
        {tracks.map(track =>
          <Track key={track.name}
            name={track.name}
            artist={track.artist.name}
            url={track.url} />
        )}
      </div>
    )
  }
}
