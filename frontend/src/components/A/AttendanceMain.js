import React, { useState } from 'react'
import './AttendanceMain.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AttendanceTable from './AttendanceTable'
const AttendanceMain = (props) => {
    const year = ['2021-2022','2022-2023','2023-2024','2024-2025']
    const branch = ['Mechanical','Civil','Computer','Electronic']
    const section = ['A',"B",'C']
    const status = ['Active','Non-Active']

    const [data, setData]= useState([])
    const [dataBranch, setDataBranch] = useState('')
    const [dataYear, setDataYear] = useState('')
    const [dataSection, setDataSection] = useState('')
    const [dataStatus, setDataStatus] = useState('')

    const [tBranch, setTBranch] = useState(false)
    const [tYear, setTYear] = useState(false)
    const [tSection, setTSection] = useState(false)
    const [tStatus, setTStetus] = useState(false)

    const [count, setCount] = useState(0)

    const [input, setInput] = useState({
        fname : '',
        classs : '',
        date : '',
        subject : '',
    })

    const changeInput = (e) => {
        setInput((pre) => {
            return {...pre, [e.target.name]:e.target.value}
        })
    }
    const submitData = (e) => {
        e.preventDefault()
        const { fname,classs,date,subject} = input;
        const obj = {
            name : fname,
            classs : classs,
            date : date,
            subject : subject,
            branch: dataBranch,
            year : dataYear,
            section : dataSection,
            status : dataStatus
        }
        setData((pre)=>{
            return [...pre,obj]
        })
    }
    
    return (
        <div className='container'>
            <div className='main'>
                <div className='nav'>
                    <h1><i className="bi bi-person-add"></i> Total Students {count}</h1>
                    <h2>Students Online Attendance</h2>
                    <div className='search'>
                        <input type='search' placeholder='Search Students'/><i className="bi bi-search"></i>
                    </div>
                </div>
                <div className='form'>
                    <h2>Student Data</h2>
                    <form onSubmit={submitData}>
                        <div className='first'>
                            <span>
                                <label htmlFor='fname'>Name :  </label>
                                <input type='text' placeholder='Enter Name' name='fname' id='fname' onChange={changeInput} value={input.fname}/>
                            </span>
                            <span>
                                <label htmlFor='classs'>Class : </label>
                                <input type='text' placeholder='Enter Class' name='classs' id='classs' onChange={changeInput} value={input.classs}/>
                            </span>
                            <span>
                               <label htmlFor='date'>Date : </label>
                                <input type='date' placeholder='Enter Date ' name='date' id='date' onChange={changeInput} value={input.date}/>
                            </span>
                            
                            <span>
                                <label htmlFor='subject'>Subject : </label>
                                <input type='text' placeholder='Enter Subject' name='subject' id='subject' onChange={changeInput} value={input.subject}/>
                            </span>
                        </div>
                        <div className='first section'>
                            <div className='main-menu'>
                                 <label htmlFor='branch'>Branch : </label>
                                <input type='text' placeholder='Select Branch' name='branch' id='branch' value={dataBranch}/>
                                <button type='button' onClick={()=>{setTBranch(!tBranch)}}><i className="bi bi-chevron-down"></i></button>
                                { tBranch && 
                                <span className='menu'>
                                    <ul>
                                        {
                                            branch.map((item,i) => (
                                                <li key={i} onClick={()=>{setDataBranch(item)}}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </span>
                                }
                             </div>
                             <div className='main-menu'>   
                                <label htmlFor='year'>Academic Year : </label>
                                <input type='text' placeholder='Select Year ' name='year' id='year' value={dataYear}/>
                                <button type='button' onClick={()=>setTYear(!tYear)}><i className="bi bi-chevron-down"></i></button>
                                <ul>
                                {
                                    tYear && year.map((item,i) => (
                                        <li key={i} onClick={()=>setDataYear(item)}>{item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                            <div className='main-menu'>
                                <label htmlFor='section'>Section : </label>
                                <input type='text' placeholder='Select Section' name='section' id='section' value={dataSection}/>
                                <button type='button' onClick={()=>setTSection(!tSection)}><i className="bi bi-chevron-down"></i></button>
                                <ul>
                                    {
                                       tSection && section.map((item,i)=>(
                                            <li key={i} onClick={()=> setDataSection(item)}>{item}</li>
                                        ))
                                    }
                                </ul>
                                </div>
                                <div className='main-menu'>
                                <label htmlFor='status'>Status : </label>
                                <input type='text' placeholder='Select Status ' name='status' id='status' value={dataStatus}/>
                                <button type='button' onClick={()=>setTStetus(!tStatus)}><i className="bi bi-chevron-down"></i></button>
                                <ul>
                                    {
                                       tStatus && status.map((item,i) => (
                                            <li key={i} onClick={()=>{item==='Active'? setCount(count+1):setCount(count+0);  setDataStatus(item);}}>{item}</li>
                                        ))
                                    }
                                </ul>
                                </div>
                        </div>
                        <button type='submit' className='btn' >Submit</button>
                    </form>
                </div>
            </div>
            
            <div>
                {data.length && <AttendanceTable allData={data}/> }
            </div>
           
            
        </div>
    )
}

export default AttendanceMain