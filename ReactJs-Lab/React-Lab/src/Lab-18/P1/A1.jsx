import React from 'react'
import B1 from './B1'

function A1(props) {
  return (
    <>
      <h1>A</h1>
      <hr />
      <B1 name={props.name} SetName={props.SetName}/>
    </>
  )
}

export default A1
