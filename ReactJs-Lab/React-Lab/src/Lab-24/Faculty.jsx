import React, { useEffect, useState } from 'react'

const API_URL = 'https://6a87de9b7b483fa21fe86a76.mockapi.io/api/v1/Faculties'

function Faculty() {
    const [list, setList] = useState([])
    const [form, setForm] = useState({
        FacultyID: '',
        FacultyName: '',
        FacultyExp: '',
        FacultyImage: ''
    })
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(null)

    const getData = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((res) => setList(res))
    }

    useEffect(() => {
        getData()
    }, [])

    const clearForm = () => {
        setForm({
            FacultyID: '',
            FacultyName: '',
            FacultyExp: '',
            FacultyImage: ''
        })
    }

    const changeInput = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const addFaculty = () => {
        const isEmpty = !form.FacultyID || !form.FacultyName || !form.FacultyExp || !form.FacultyImage

        if (isEmpty) {
            alert('Fill all fields')
            return
        }

        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
            .then(() => {
                getData()
                clearForm()
            })
    }

    const editFaculty = (item) => {
        setEdit(true)
        setId(item.id ?? item.FacultyID)
        setForm({
            FacultyID: item.FacultyID,
            FacultyName: item.FacultyName,
            FacultyExp: item.FacultyExp,
            FacultyImage: item.FacultyImage
        })
    }

    const updateFaculty = () => {
        const isEmpty = !form.FacultyID || !form.FacultyName || !form.FacultyExp || !form.FacultyImage

        if (isEmpty) {
            alert('Fill all fields')
            return
        }

        fetch(API_URL + '/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
            .then(() => {
                setEdit(false)
                setId(null)
                getData()
                clearForm()
            })
    }

    const deleteFaculty = (facultyId) => {
        fetch(API_URL + '/' + facultyId, {
            method: 'DELETE'
        })
            .then(() => {
                getData()
            })
    }

    return (
        <>
            <div className="main">
                <h2>CRUD Operation Of Faculty List</h2>

                <div>
                    FacultyID:
                    <input type="text" name="FacultyID" value={form.FacultyID} onChange={changeInput} />
                </div>

                <div>
                    FacultyName:
                    <input type="text" name="FacultyName" value={form.FacultyName} onChange={changeInput} />
                </div>

                <div>
                    FacultyExp:
                    <input type="text" name="FacultyExp" value={form.FacultyExp} onChange={changeInput} />
                </div>

                <div>
                    FacultyImage:
                    <input type="text" name="FacultyImage" value={form.FacultyImage} onChange={changeInput} />
                </div>

                <button onClick={edit ? updateFaculty : addFaculty}>
                    {edit ? 'Update Faculty' : 'Add Faculty'}
                </button>

                {edit && (
                    <button onClick={() => {
                        setEdit(false)
                        setId(null)
                        clearForm()
                    }}>
                        Cancel
                    </button>
                )}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Faculty Name</th>
                        <th>Experience</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={item.id ?? item.FacultyID ?? index}>
                            <td>{item.FacultyID}</td>
                            <td>{item.FacultyName}</td>
                            <td>{item.FacultyExp}</td>
                            <td>
                                <img src={item.FacultyImage} alt={item.FacultyName} height="80" width="80" />
                            </td>
                            <td>
                                <button onClick={() => editFaculty(item)}>Edit</button>
                                <button onClick={() => deleteFaculty(item.id ?? item.FacultyID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Faculty
