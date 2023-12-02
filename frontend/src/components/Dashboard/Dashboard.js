import React from 'react'
import './Dashboard.css'
import { Space } from 'antd'
import DashHeader from './DashHeader'
import DashSideManu from './DashSideManu'
import DashPageContent from './DashPageContent'
import DashFooter from './DashFooter'
import { BrowserRouter as Router } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='app'>
      <Router>
        <DashHeader/>
        <Space className='SideMenuAndPageContent'>
            <DashSideManu/>
            <DashPageContent/>
        </Space>
        <DashFooter/>
        </Router>
    </div>
  )
}

export default Dashboard