import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import  Data  from './Data'
import { useNavigate } from 'react-router-dom'

const AddStd = () => {
    const [alt, setAlt] = useState(false)
    const navigate = useNavigate()
    const [input, setInput] = useState({
        fname : '',
        language : '',
        std : ''
    })

    const changeInput = (e) => {
                setInput((pre) => {
            return {...pre, [e.target.name]:e.target.value}
        })
    }
    const akurdi = () => {
        setAlt(true)
    }
    const createData = (e) => {
        e.preventDefault()
        const nData = {
            name : input.fname,
            lang : input.language,
            std : input.std
        }
        if(!nData.name || !nData.lang || !nData.std){
            <Alert variant='danger' dismissible onClick={akurdi}> 
            <p>Please Enter The Valid Code</p>
            </Alert>
        } else{
            Data.push({id:Data.length+1,name:nData.name,language:nData.lang,std:nData.std})
            // console.log(fname,language,std)
        }
        navigate('/')
    }
  return (
    <div className='newData'>
        <div className='nData'>
            <h3>Add Data</h3>
            <form>
                <div>
                <label htmlFor='fname'>Name : </label>
                <input type='text' id='fname' name='fname' onChange={changeInput} value={input.fname}/>
                </div>
                <div>
                <label htmlFor='language'>Language : </label>
                <input type='text' id='language' name='language' onChange={changeInput} value={input.language}/>
                </div>
                <div>
                <label htmlFor='std'>Std : </label>
                <input type='text' id='std' name='std' onChange={changeInput} value={input.std}/>
                </div>
                <Button onClick={createData} type='submit'>Save</Button>
            </form>
        </div>
    </div>
  )
}

export default AddStd