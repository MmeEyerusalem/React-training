import React from 'react'

function Programming() {
    const prog = ['C++', 'Java', 'Python']
  return (
    <div>
       {/* <h1>{prog[0]}</h1>
       <h1>{prog[1]}</h1>
       <h1>{prog[2 ]}</h1> */}
       {/* {
        prog.map(name => <h1>{name}</h1>)
       } */}
       {
        prog.map((name,index) => <h1 key={index}>{name}</h1>)
       }
       
    </div>
  )
}

export default Programming
