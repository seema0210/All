// js epresion --> props.children
import React, { useState } from 'react'
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState()
    const [password, setPassword] = useState('')
    const changeName = (eve) => {
        setName(eve.target.value)
    }
    const changeEmail = (eve) => {
        setEmail(eve.target.value)
    }
    const changePassword = (eve) => {
        setPassword(eve.target.value)
    }
    const greet = (eve) => {
        eve.preventDefault()
        if(name.trim().length === 0 || email.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message : 'Please enter a valid name and email (non-empty values)'
            })
            return;
        }
        if(password.trim().length < 6){
            // here + use because useState() bydefault return string value
            setError({
                title : 'Invalid Password',
                message : 'Please enter Password greater than 6'
            })
            return;
        }
        props.onRaise(name,email)
        console.log(password)
        setName('')
        setEmail('')
        setPassword('')
    }
    const empty = () => {
        setError(null)
    }
  return (
    <>
    {error && <ErrorModel title={error.title} message={error.message} clear = {empty}/>}
    <Card className = {classes.input}>  
        {/* card is the custom component, it has special props */}
    <form onSubmit={greet}>
        <label htmlFor='uname'>User Name : </label>
        <input type='text' id='uname' onChange={changeName} value={name}/>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' onChange={changeEmail} value={email}/>
        <label htmlFor='pass'>Password:</label>
        <input type='password' id='pass' onChange={changePassword} value={password}/>
        <button type='submit' className={classes.button}>Add User</button>
    </form>
    </Card>
    </>
  )
}

export default AddUser