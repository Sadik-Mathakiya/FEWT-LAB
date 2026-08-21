import React, { useState } from 'react'

function UseState() {
    const [Count , SetCount] = useState(0)
    const [Name , Change] = useState("")
    const [Range , RangeChange] = useState(0)
    return (
    <>
        <h1>Count : {Count}</h1>
        <br />
        <button onClick={()=>{
            SetCount(Count+1)
        }}>Click</button>
        <br />
        <h1>Name : {Name}</h1>
        <br />
        <input type="text" onChange={(e)=>{
            Change(e.target.value)
        }} />
        <br />
        <h1>Range : {Range}</h1>
        <input type="Range" onChange={(e)=>{
            RangeChange(e.target.value)
        }} />
    </>
  )
}

export default UseState
