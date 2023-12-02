import React from 'react'
import './Dashboard.css'
import { Typography } from 'antd'

const DashFooter = () => {
  return (
    <div className='footer'>
        <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
        <Typography.Link href='https://www.google.com' target={'_blank'}>Privacy Policy</Typography.Link>
        <Typography.Link href='https://www.google.com' target={'_blank'}>Terms of Use</Typography.Link>
    </div>
  )
}

export default DashFooter