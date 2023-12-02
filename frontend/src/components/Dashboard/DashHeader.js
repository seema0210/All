import { Image,Typography, Space, Badge } from 'antd'
import { MailOutlined, BellFilled } from '@ant-design/icons'
import React from 'react'

const DashHeader = () => {
  return (
    <div className='header'>
        <Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' width={40}/>
        <Typography.Title>Admin Dahboard</Typography.Title>
        <Space>
            <Badge><MailOutlined style={{ fontSize: 24}}/></Badge>
            <Badge count={20}><BellFilled style={{ fontSize: 24}}/></Badge>
        </Space>
    </div>
  )
}

export default DashHeader