import React from 'react'

const AttendanceTable = ({ allData }) => {
   
    return (
        <div className='table'>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Date</th>
                        <th>Subject</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Section</th>
                        <th>Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((items, i) => (
                            <tr key={i}>
                                <td>{items.name}</td>
                                <td>{items.classs}</td>
                                <td>{items.date}</td>
                                <td>{items.subject}</td>
                                <td>{items.year}</td>
                                <td>{items.status}</td>
                                <td>{items.section}</td>
                                <td>{items.branch}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AttendanceTable