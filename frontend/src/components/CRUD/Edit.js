import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Employess from './Employee'
const Edit = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    let ind = Employess.map((i) => {
        return i.id
    })
    // let index = indexOf(ind)

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = Employess[ind]
        data.Name = name;
        data.Age = age;
        navigate('/')
    }
  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:'15rem'}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Agee' value={age} required onChange={(e)=> setAge(e.target.value)}/>
            </Form.Group>
                <br/>
            
        <Button onClick={handleSubmit} type='submit'>Save</Button>
        </Form>
    </div>
  )
}

export default Edit