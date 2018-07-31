import React from 'react'

export const Track = (props) => {
  return (
    <ul>
      <li key={props.key}>
        {props.name}
      </li>
    </ul>
  )
}
