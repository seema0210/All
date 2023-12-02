import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Employess from './Employee'

const Add = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name : name,
            age : age
        }
        Employess.push({id:Employess.length+1, Name:data.name, Age:data.age})
        navigate('/')
    }
  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:'15rem'}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Agee' required onChange={(e)=> setAge(e.target.value)}/>
            </Form.Group>
                <br/>
        <Button onClick={handleSubmit} type='submit'>Save</Button>
        </Form>
    </div>
  )
}

export default Add