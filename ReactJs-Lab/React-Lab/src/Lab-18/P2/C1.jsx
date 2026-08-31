import React from 'react'
import D1 from './D1'

function C1(props) {
  return (
    <>
      <h1>C</h1>
      <hr />
      <D1 name={props.name} SetName={props.SetName} />
    </>
  )
}

export default C1
