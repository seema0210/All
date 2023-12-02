import React, { useState } from 'react'
import { QuizData } from './QuizData'
import './QuizMain.css'
import Result from './Result'
const QuizMain = () => {
    const [currQue, setCurrQue] = useState(0)
    const [score, setScore] = useState(0)
    const [clickOption, setClickOption] = useState(0) // use for index
    const [showResult, setShowResult] = useState(false)
    const changeQue = () => { 
        updateScore()
        if(currQue < QuizData.length-1){
            setCurrQue(currQue+1) // click on next button go to next quetion
            setClickOption(0)
        } else{
            setShowResult(true)
        }
        
    }
    const updateScore = () => {
        if(clickOption === QuizData[currQue].answer){
            setScore(score+1)
        }
    }
    const resetAll = () => {
        setShowResult(false)
        setCurrQue(0)
        setClickOption(0)
        setScore(0)
    }
  return (
    <div>
        <p className='heading'>QUIZ APP</p>
        <div className='container'>
            {
                showResult ? (<Result score={score} totalScore={QuizData.length} tryAgain={resetAll}/>)  :
            ( <>
            <div className='quetion'>
                <span>{currQue+1}</span><span>.</span><span>{QuizData[currQue].question}</span>
            </div>
            <div className='options'>
                {
                    QuizData[currQue].options.map((option,i) => 
                        <button className='btn' onClick={()=>setClickOption(i+1)} key={i}> 
                        {/* it take current quetion index (bydefault setClickOption is 0 thats wy add current index value) */}
                            {option}
                            </button>
                    )
                }
            </div>
            <button type='submit' className='btn1' onClick={changeQue}>Next</button>
            </>) 
            }
        </div>
    </div>
  )
}

export default QuizMain