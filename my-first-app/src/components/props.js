// import React from 'react'

// const Fullname = (props) => {
//     return ( 
//     <div>
//         <h1>{props.name} Kebede {props.age}</h1>
//         {props.children}
//     </div>
//       );
// }
 
// export default Fullname ;

import React, { Component } from 'react'

export default class props extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} Kebede {this.props.age}</h1>
        {this.props.children}
      </div>
    )
  }
}
