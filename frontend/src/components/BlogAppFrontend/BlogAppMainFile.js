import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Auth from './Auth'
import Blogs from './Blogs'
import UserBlogs from './UserBlogs'
import AddBlog from './AddBlog'
import BlogDetail from './BlogDetail'
import { authActions } from './store'

const BlogAppMainFile = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  // when refresh the page then user need login again and again then this problem solve by 'localStorage' means as long as user is present there i no need to login
  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(authActions.login())
    }
  }, [dispatch])

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {
            !isLoggedIn ? <Route path='/auth' element={<Auth />} /> :
              <>
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/myBlogs' element={<UserBlogs />} />
                <Route path='/blogDetail/:id' element={<BlogDetail />} />
                <Route path='/addBlog' element={<AddBlog />} />
              </>
          }
        </Routes>
      </main>
    </div>
  )
}

export default BlogAppMainFile