import React from 'react'
import { Card, Space, Statistic, Typography } from 'antd'
import { ShoppingCartOutlined,UserOutlined,DollarCircleOutlined,ShoppingOutlined } from '@ant-design/icons'

const Dash = () => {
  return (
    <div>
        <Typography.Title level={3}>Dash</Typography.Title>
        <Space direction='horizontal'>
          <DashCard
          icon={<ShoppingCartOutlined
          style={{
            color:'green',
            backgroundColor:'rgba(0,255,0,0.25)',
            borderRadius : 24,
            padding : 8,
            fontSize : 24
          }}/>}
          title={'Orders'}
          value={12345}/>
          <DashCard
          icon={<ShoppingOutlined
            style={{
              color:'green',
              backgroundColor:'rgba(0,255,0,0.25)',
              borderRadius : 24,
              padding : 8,
              fontSize : 24
            }}/>}
          title={'Inventory'}
          value={12345}/>
          <DashCard
          icon={<UserOutlined
            style={{
              color:'green',
              backgroundColor:'rgba(0,255,0,0.25)',
              borderRadius : 24,
              padding : 8,
              fontSize : 24
            }}/>}
          title={'Customers'}
          value={12345}/>
          <DashCard
          icon={<DollarCircleOutlined
            style={{
              color:'green',
              backgroundColor:'rgba(0,255,0,0.25)',
              borderRadius : 24,
              padding : 8,
              fontSize : 24
            }}/>}
          title={'Revenue'}
          value={12345}/>
        </Space>
    </div>
  )
}

function DashCard({title,value,icon }){
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
          <Statistic title={title} value={value}/>
      </Space>
    </Card>
  )
}

export default Dash