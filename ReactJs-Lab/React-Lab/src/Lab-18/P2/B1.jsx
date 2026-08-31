import React, { useState } from 'react'
import UseState from '../../Lab-21/UseState'
import C1 from './C1'

function B1(props) {
    const [InputVal,SetInput]=useState("")
  return (
    <>
    <h1>B</h1>

      <input type="text" onChange={(e)=>{SetInput(e.target.value)}}/>
      <br />
      <button onClick={()=> props.SetName(InputVal)}>Change</button>
      <hr />
      <C1 name={props.name} SetName={props.SetName} />
    </>
  )
}

export default B1
