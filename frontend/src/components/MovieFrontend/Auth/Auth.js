import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../API/api-helpers'

const Auth = () => {
  const getData = (data) => {
    sendUserAuthRequest(data.input, data.signup).then((res) =>{
      console.log(res)
      return
    }).catch((e) =>{
      console.log('error at user auth frontend', e)
    })
  }
  return (
    <div>
        <AuthForm onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth