import React from 'react'

function Student() {
    const student=[
        {id:301,name:'Sadik Mathakiya',city:'Wankaner'},
        {id:302,name:'Parasara asad',city:'Wankaner'},
        {id:303,name:'parasara nakib',city:'Wankaner'},
        {id:304,name:'bavra nazim',city:'Wankaner'}
    ]
  return (
     <>
    <h2>Student</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {student.map((temp) => (
            <tr key={temp.id}>
              <td>{temp.id}</td>
              <td>{temp.name}</td>
              <td>{temp.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  )
}

export default Student
