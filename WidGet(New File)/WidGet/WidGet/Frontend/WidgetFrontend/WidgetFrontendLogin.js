import React, { useState } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import WidgetFrontendHome from './WidgetFrontendHome'
import './WidgetFrontendLogin.css'

const WidgetFrontendLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')
    const [state, setState] = useState(false)
    const navigate = useNavigate()

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPasword(e.target.value)
    }
    const login = (e) => {
        e.preventDefault()
        console.log(email,password)
        fetch('http://localhost:3000/api/Account/login',{
            method : 'POST',
            body : JSON.stringify({email,password}),
            headers : {
                "Content-type" : "application/json"
            }
        }).then((data) => {
            data.json()
            navigate('/home')
        })
        setState(!state)
        setEmail('')
        setPasword('')
    }
  return (
    <div>
        {
            state && (
                <Routes>
                    <Route path='/home' element={<WidgetFrontendHome/>}/>
                </Routes>
            )
        }
        {
            !state && (
                <div className='form'>
                <form>
                <h2>Login User</h2>
                <div>
                <label htmlFor='email'>Email : </label>
                <input type='email' id='email' name='email' placeholder='Please Enter Your Email ' value={email} onChange={changeEmail}/>
                </div>
                <div>
                <label htmlFor='password'>Password : </label>
                <input type='password' id='password' name='password' placeholder='Please Enter Your Email ' value={password} onChange={changePassword}/>
                </div>
               
                <button type='submit' className='btn' onClick={login}>Login</button>
            </form>
            </div>
            )
        }
        
    </div>
  )
}

export default WidgetFrontendLogin