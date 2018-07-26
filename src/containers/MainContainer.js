import React from 'react'
import { Main } from '../components/Main'

export class MainContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: 1,
      scale: 1
    }

    this.handleHide = this.handleHide.bind(this)
    this.handleScale = this.handleScale.bind(this)
  }

  handleHide () {
    this.setState({
      opacity: 0
    })
  }

  handleScale () {
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.2
    })
  }

  render () {
    let handleHide = this.handleHide
    let handleScale = this.handleScale
    return (
      <Main handleHide={handleHide} handleScale={handleScale} {...this.state} />
    )
  }
}
