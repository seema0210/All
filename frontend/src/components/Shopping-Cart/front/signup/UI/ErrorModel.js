import React from 'react'
import classes from './ErrorModel.module.css'
const ErrorModel = (props) => {
  return (
    <div>
        <div className={classes.backdrop}></div>
        <div className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <button className={classes.action} onClick={props.clear}>Okay</button>
    </div>
    </div>
  )
}

export default ErrorModel