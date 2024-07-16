import React, { Component } from "react";

 class Event_bind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        message: "Hello",
    };
    this.Handler = this.Handler.bind(this);
  }
  Handler(){
    this.setState({
      message: "Goodbye",
    });

    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.Handler.bind(this)}>Click here!</button> */}
        {/* <button onClick={() => this.Handler()}>Click here!</button> */}
        <button onClick={this.Handler}>Click here!</button>
      </div>
    );
  }
}

export default Event_bind;

