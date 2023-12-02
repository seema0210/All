import React from 'react'
import './QuizMain.css'
const Result = (props) => {
  return (
    <>
    <div style={{marginTop:'30px', padding:'50px', fontSize:'30px'}}>
        Your Score : {props.score} <br/>
        Total Score : {props.totalScore}
    </div>
    <button type='submit' className='btn1' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default Result