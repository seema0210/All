import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const DashSideManu = () => {
  const navigate =  useNavigate()
  return (
    <div className='sideManu'>
        <Menu onClick={(item)=>{
            // item.key
            navigate(item.key)
        }}
        items={[
            {label:'Dashbaord', key:'/', icon:<AppstoreOutlined/>},
            {label:'Inventory', key:'/inventory', icon:<ShopOutlined/>},
            {label:'Orders', key:'/orders', icon:<ShoppingCartOutlined/>},
            {label:'Customers', key:'/customers', icon:<UserOutlined/>},
        ]}
        ></Menu>
    </div>
  )
}

export default DashSideManu