import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom' 
import { changePageStatus} from '../../features/employees/employeeSlice'
import "./style.css"

const Header = () => {

    const dispatch = useDispatch()
    const pageStatus = useSelector(state => state.employees.homePage)
 
    return (
        <header>
            <h1 className="">HRnet</h1>
            {pageStatus
                ? <Link to={"/employeeList"}><button onClick={() => dispatch(changePageStatus(pageStatus))}>View Employees</button></Link>
                : <Link to={"/"}><button onClick={() => dispatch(changePageStatus(pageStatus))}>Back</button></Link>
            }
        </header>
  )
}

export default Header