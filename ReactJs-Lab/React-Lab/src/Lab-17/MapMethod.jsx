import React from 'react'

function MapMethod() {
    const array=['Sadik','Nazim','Nakib','Asad']
  return (
   <>
      <h2>Simple Array List</h2>
      <ul>
        {array.map((array, index) => (
          <li key={index}>{array}</li>
        ))}
      </ul>
   </>
  )
}

export default MapMethod
