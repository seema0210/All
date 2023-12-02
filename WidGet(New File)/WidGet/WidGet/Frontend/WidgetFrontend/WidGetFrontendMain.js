import React from 'react'
import WidgetFrontendLogin from './WidgetFrontendLogin'
import { BrowserRouter as Router } from 'react-router-dom'

const WidGetFrontendMain = () => {
  return (
    <Router>
        <WidgetFrontendLogin/>
    </Router>
  )
}

export default WidGetFrontendMain