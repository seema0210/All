import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employess from './Employee'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const deleteHandle = (id) => {
        var index = Employess.map((element) => {
            return element.id;
        }).indexOf(id)
        Employess.splice(index,1)
        alert('Delete Data Successfully')
        navigate('/')
    }
  return (
    <div>
        <div style={{margin:'10rem'}}>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employess.length>0 ? Employess.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                     <Link to='edit'><Button >Edit</Button></Link> &nbsp;
                                    <Button onClick={()=>deleteHandle(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }) : 'Not Data Found'
                    }
                </tbody>
            </Table>
            <br/>
            <Link className='d-grid gap-2' to='/create'><Button size='lg'>Create</Button></Link>
        </div>
    </div>
  )
}
export default Home