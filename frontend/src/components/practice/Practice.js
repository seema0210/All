import React, { useState } from 'react'
import { Data } from './Data'
const Practice = () => {
    const [ind, setInd] = useState('')
    const [currQue, setCurrQue] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [total, setTotal] = useState(0)

    const handleData = () => {
        checkAns()
        if(currQue < Data.length-1){
            setCurrQue(currQue+1)
        } else {
            setShowResult(true)
        }
    }
    const checkAns = () => {
        if( ind === Data[currQue].ans){
            setTotal(total+1)
        }
    }
  return (
    <div style={{width:'600px', height:'300px', backgroundColor:'gray'}}>
        <div>
            <span>{currQue+1}.{Data[currQue].Que}</span>
        </div>
        <div>
                {
                    Data[currQue].Options.map((item,i) => (
                        <button key={i} onClick={()=>setInd(item)}>{item}</button>
                    ))
                }
        </div>
        <button onClick={handleData}>Next</button>
        {
            showResult && (
                <>
                    <h2>Total Score : {total}</h2>
                    <h2>Total : </h2>
                </>
            )
        }
    </div>
  )
}

export default Practice