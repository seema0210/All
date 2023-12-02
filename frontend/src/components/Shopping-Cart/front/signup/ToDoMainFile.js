import React, { useState } from 'react'
import AddUser from './Users/AddUser'
import UsersList from './Users/UsersList'

const ToDoMainFile = () => {
    const [int, setInt] = useState([])
    // above set array becausse map use next, array can easily mapping. entered value goes in his array.
    const fly = (n,a) => {
        // this program depend on previous step, so bolow method use.(submit form value then it disply below, clear form again fill and submit form 2nd value disply below the previous form value --> this concept called prevous depend step)
        setInt((prev) => {
            return [ ...prev, {name : n, email : a, id : Math.random()*10}]
        })
    }
  return (
    <div>
        <AddUser onRaise={fly}/>
        <UsersList users={int}/>
    </div>
  )
}

export default ToDoMainFile