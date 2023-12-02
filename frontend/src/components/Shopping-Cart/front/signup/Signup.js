import React, { useState } from 'react'
import './Signup.css'
import SignupForm from './SignupForm'
import SignupFormChild from './SignupFormChild'

const Signup = () => {
    const [valid, setValid] = useState([])
    const accessData = (n,e,p) => {
        setValid((pre) => {
            return [ ...pre, {name:n, email: e, password : p}]
        })
    }
  return (
    <div className='signup'>
        <SignupForm onData={accessData}/>
        <SignupFormChild  pass={valid}/>
    </div>
  )
}

export default Signup