import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  return (
    <div className={`${classes.Card} ${props.className}`}>{props.children}</div>
    //here clases.card is the css from card.module.css and props.className is the css from AddUser Component, these both clases are use at a time
    // props.children is a js code
  )
}

export default Card