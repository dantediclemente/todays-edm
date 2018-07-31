import React from 'react'
import './assets/stylesheets/Track.css'

export const Track = (props) => {
  return (
    <div className='collection container with-header animated bounceInUp'>
      <a className='collection-item center-align animated bounceInUp' href={props.url}>{props.name} ({props.artist})</a>
    </div>
  )
}
