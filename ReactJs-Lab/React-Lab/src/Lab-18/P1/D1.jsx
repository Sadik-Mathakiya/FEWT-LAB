import React from 'react'
import E1 from './E1'

function D1(props) {
  return (
    <>
      <h1>D</h1>
      <hr />
      <E1 name={props.name} SetName={props.SetName} />
    </>
  )
}

export default D1
