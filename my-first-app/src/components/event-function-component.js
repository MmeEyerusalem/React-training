import React from 'react'; 

function Event_funcn() {
    function over(){
        // console.log("clicked");
        alert("clicked on function");
    }
  return (
    <div>
      <button onClick={over}>click here!</button>
    </div>
  )
}

export default Event_funcn;
