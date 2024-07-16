import React, { Component } from 'react';

class event_class_component extends Component {
    Event_function() {
            // console.log("click!");
            alert("click on class component.");
        }
  render() {
    return (
      <div>
        <button onClick={this.Event_function}>Clicked here!</button>
      </div>
    );
  }
}
export default event_class_component;
