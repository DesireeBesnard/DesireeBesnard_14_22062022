import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom' 
import { changePageStatus} from '../../features/employees/employeeSlice'
import "./style.css"

const Header = () => {

    const dispatch = useDispatch()
    const isHomePage = useSelector(state => state.employees.homePage)

    return (
        <header>
            <h1 className="">HRnet</h1>
            {isHomePage
                ? <Link to={"/employeeList"}><button className='primary' onClick={() => dispatch(changePageStatus(isHomePage))}>View Employees</button></Link>
                : <Link to={"/"}><button className='primary' onClick={() => dispatch(changePageStatus(isHomePage))}>Back</button></Link>
            }
        </header>
  )
}

export default Header