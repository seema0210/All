// we can render all blogs by specific user. its name is 'myBlogs'
// here is fetch the blog which is currently loggedin then we need is of the user
// when we login page then backend give the o/p 'login succesfully', also we need id of the current user, goted user id we can store in rudux or variable, if we want store in memory of the application then use localStorage.
// when reload or close the browser and reopen page the page then not effect when use localStorage.
//localStorage : we can store data permanantly on browser.
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const UserBlogs = () => {
  const [user, setUser] = useState([])
  const id = localStorage.getItem('userId') // get id by  using userId key

  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:4000/api/blog/user/${id}`)
      .catch((e) => console.log(e))
    const data = await res.data;
    console.log('user data : ', data)
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user))
    // data.user > this user from blog-controller file but blogs field inside this uer
  }, [])


  return (
    <div>
      {
        user && user.blogs && user.blogs.map((item, ind) => (
          <Blog
            key={ind}
            isUser={true}
            title={item.title}
            description={item.description}
            imageURL={item.image}
            userName={user.name}
          />
        ))
      }
    </div>
  )
}

export default UserBlogs