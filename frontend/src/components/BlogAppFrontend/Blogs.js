import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:4000/api/blog/getAllBlogs`)
      .catch((e) => console.log(e))
    const data = res.data;
    console.log(data)
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data))
  }, [])
  console.log('ckeck', blogs)
  return (
    <div>
      {
        blogs && blogs.map((item, ind) => (
          <Blog
            key={ind}
            id={item._id}
            isUser={localStorage.getItem('userId') === item.user._id}
            // current user id is match with blog ids which are created using current user, avove condition is success then isUser=true
            title={item.title}
            description={item.description}
            imageURL={item.image}
            userName={item.user.name}
          />
        ))
      }

    </div>
  )
}

export default Blogs