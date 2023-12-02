import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {  NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='d-flex justify-content-between flex-column bg-dark text-white vh-100'>
        <div className='container'>
            <NavLink htmlFor='' className='dash'>
                <i className='bi bi-code-slash fs-4 me-4'></i>
                <span className='fs-4'>SIS</span>
            </NavLink>
            <hr className='text-secondary'/>
            <ul className='nav nav-pills flex-column '>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i class="bi bi-grid-fill p-3 fs-4"></i>
                        <span className='fs-4'><strong>Dashboard</strong></span>
                    </NavLink>
                </li>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i className='bi bi-people p-3 fs-4'></i>
                        <span className='fs-4'><strong>Student</strong></span>
                    </NavLink>
                </li>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i className='bi bi-table p-3 fs-4'></i>
                        <span className='fs-4'><strong>Attendance</strong></span>
                    </NavLink>
                </li>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i className='bi bi-book p-3 fs-4'></i>
                        <span className='fs-4'><strong>Subjects</strong></span>
                    </NavLink>
                </li>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i class="bi bi-bank p-3 fs-4"></i>
                        <span className='fs-4'><strong>School</strong></span>
                    </NavLink>
                </li>
                <li className='nav-item mt-4'>
                    <NavLink htmlFor='' className='dash'>
                        <i class="bi bi-person-lines-fill p-3 fs-4"></i>
                        <span className='fs-4'><strong>Teatures</strong></span>
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <hr className='text-secondary'/>
        <div className='container'>
        <div className='nav-item p-2 mb-5'>
            <NavLink htmlFor='' className='dash'>
                <i className='bi bi-person-circle p-2 fs-4'></i>
                <span className='fs-4 p-2'><strong>Help</strong></span>
            </NavLink>
        </div>
        </div>
    </div>
  )
}
export default Sidebar