import React, { useState } from 'react'
import { Input } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
const BootstrapTable = () => {
    return (
    <div>
          <Input 
          placeholder='enter yiur name'
          maxLength={10}
          prefix={<UserAddOutlined/>}
          allowClear // display delete icon
          type='password'/>
          <Input.Search 
          placeholder='enter yiur name'
          maxLength={10}
          prefix={<UserAddOutlined/>}
          allowClear // display delete icon
          />
          </div>
  )
}
export default BootstrapTable