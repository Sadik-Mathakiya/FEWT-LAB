import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [Count , SetCount] = useState(0);
    const [Flag , SetFlag] = useState(true);
    useEffect(()=>{console.log("Reder at count",Count)},[Flag])
    return (
        <>
      <h1>Count : {Count}</h1>
      <button onClick={()=>{
          SetCount(Count+1)
      }}>Click</button>
      <button onClick={()=>{
         SetFlag(!Flag)
      }}>Render</button>
    </>
  )
}

export default UseEffect;
