import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import BlogAppMainFile from './BlogAppMainFile'
import { store } from './store'

const BlogAppMainFileFrontend = () => {
    return (
        <Router>
            <Provider store={store}>
                <BlogAppMainFile />
            </Provider>
        </Router>
    )
}

export default BlogAppMainFileFrontend