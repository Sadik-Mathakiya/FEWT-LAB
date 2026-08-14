import React from 'react'

export default function Faculties() {
    const faculties=[
        {id:1,name:'Arjun Bala',department:'CSE'},
        {id:2,name:'Pardhyuman Jadeja',department:'CSE'},
        {id:3,name:'Vishal Kansagra',department:'CSE'},
        {id:4,name:'Nilesh Gambhva',department:'CSE'}
    ]
  return (
   <>
    <h2>Faculties</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((temp) => (
            <tr key={temp.id}>
              <td>{temp.id}</td>
              <td>{temp.name}</td>
              <td>{temp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  )
}
