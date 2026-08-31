import React from 'react'
import F1 from './F1'

function E1(props) {
  return (
    <>
      <h1>E</h1>
      <hr />
      <F1 name={props.name} SetName={props.SetName}/>
    </>
  )
}

export default E1
