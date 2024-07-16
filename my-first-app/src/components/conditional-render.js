import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ifsubscriber: true,
      }
    }
    
  render() {
    // -------if--else--------

    // if(this.state.ifsubscriber){
    //     return(
    //         <div>
    //             <h1>Subscribed</h1>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div>
    //             <h1>Subcribe here!</h1>
    //         </div>
    //     );
    // }

    // ---------Ternary operator -------------
    // return(
    //     this.state.ifsubscriber ?
    //     <div>
    //         <h1>Subcribed</h1>
    //     </div>:
    //     <div>
    //         <h1>Subcribe here!</h1>
    //     </div>
    // )

    // ----------Logical && operator---------

    return(
        this.state.ifsubscriber && (<div>
            <h1>Subscribed</h1>
        </div>)
    )

    // return (
    //   <div>
    //     <h1>Subscribed</h1>
    //     <h1>Subcribe here</h1>
    //   </div>
    // );
  }
}

export default ConditionalRender;
