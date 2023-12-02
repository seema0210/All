import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [input, setInput] = useState('')
    const changeInput = (e) => {
        setInput(input + e.target.value)
    }
  return (
    <div className='container'>
        <div className='calculator'>
            <form>
                <div className='display'>
                    <input type='text' value={input}></input>
                </div>
                <div>
                    <input type='button' value='AC' onClick={()=> setInput('')} />
                    <input type='button' value='DE' onClick={()=> setInput(input.slice(0,-1))}/>
                    <input type='button' value='.' onClick={changeInput}/>
                    <input type='button' value='/' onClick={changeInput}/>
                </div>
                <div>
                    <input type='button' value='7' onClick={changeInput}/>
                    <input type='button' value='8' onClick={changeInput}/>
                    <input type='button' value='9' onClick={changeInput}/>
                    <input type='button' value='*' onClick={changeInput}/>
                </div>
                <div>
                    <input type='button' value='4' onClick={changeInput}/>
                    <input type='button' value='5' onClick={changeInput}/>
                    <input type='button' value='6' onClick={changeInput}/>
                    <input type='button' value='+' onClick={changeInput}/>
                </div>
                <div>
                    <input type='button' value='1' onClick={changeInput}/>
                    <input type='button' value='2' onClick={changeInput}/>
                    <input type='button' value='3' onClick={changeInput}/>
                    <input type='button' value='-' onClick={changeInput}/>
                </div>
                <div>
                    <input type='button' value='00' onClick={changeInput}/>
                    <input type='button' value='0' onClick={changeInput}/>
                    <input type='button' value='=' className='equal' onClick={()=>setInput(eval(input))}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator