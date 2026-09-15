import React, { useEffect, useState } from 'react'

function Faculty() {
    const [FacultyList, Setlist] = useState([])

    useEffect(() => {
        fetch('https://6a87de9b7b483fa21fe86a76.mockapi.io/api/v1/Faculties')
            .then((res) => res.json())
            .then((res) => {
                Setlist(res)
            })
            
    }, [])

    const records = FacultyList.map((item, index) => (
        <tr key={item.FacultyID || index}>
            <td>{item.FacultyID}</td>
            <td>{item.FacultyName}</td>
            <td>{item.FacultyExp}</td>
            <td>
                <img src={item.FacultyImage} alt={item.FacultyName} height={80} width={80} />
            </td>
        </tr>
    ))

    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Faculty Name</th>
                        <th>Experience</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>{records}</tbody>
            </table>
        </>
    )
}

export default Faculty
