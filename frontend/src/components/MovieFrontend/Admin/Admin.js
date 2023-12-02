import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuthRequest } from '../API/api-helpers'

const Admin = () => {
  const getData = (data) => {
    console.log("admin" , data)
    sendAdminAuthRequest(data.input).then((res) => {
      console.log(res)
    }).catch((e) =>  {
      console.log( 'error at admin send req frontend',e)
    })
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin