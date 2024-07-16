import React from 'react'
import './style.css';

function Style(props) {
    let cName = props.heading ? 'heading' : ''
  return (
    <div>
      <h1 className= {`${cName} lFont fStyle spaceB `}>Styles for react component</h1>
    </div>
  )
}

export default Style
