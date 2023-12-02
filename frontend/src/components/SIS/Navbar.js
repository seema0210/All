import React, { useState } from 'react'
import { Form,Table,Button } from 'react-bootstrap'
import Data  from './Data'

const Navbar = () => {
    const [record, setRecord] = useState(Data)

    const deleteHandle = (id) => {
        let ind = Data.map((ele)=>{
            return ele.id;
        }).indexOf(id)
        Data.splice(ind,1)
        alert('delete data Successfully')
    }
    const Filter = (e) => {
        setRecord(Data.filter(i=>i.name.toLocaleLowerCase().includes(e.target.value)))
    }
  return (
    <div>
        <div className='int'>
            <Button href='/Add'>Add</Button>
            <input type='text' placeholder='Search Student' onChange={Filter}/><i class="bi bi-search"></i>
        </div>
        <div className='heading'>
            <h1>Student Data</h1>
        </div>
        <div className='table'>
        <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>STD</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.length>0 ? record.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.language}</td>
                                    <td>{item.std}</td>
                                    <td>
                                    <Button onClick={(item)=>deleteHandle(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }) : 'Not Data Found'
                    }
                </tbody>
            </Table>
            </div>
    </div>
  )
}

export default Navbar