import React, { Component } from 'react'

class Subscribed extends Component {
    constructor() {
      super()
      this.state = {
         Channel: "React Tech"
      }
    }
    changeMessage(){
        this.setState({
            Channel: "Thank you for clicking"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Channel}</h1>
        <button onClick = {() => this.changeMessage()}>Click & change</button>
      </div>
    )
  }
}

export default Subscribed
