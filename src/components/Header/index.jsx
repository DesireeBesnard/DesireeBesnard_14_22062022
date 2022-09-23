import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom' 
import { changePageStatus} from '../../features/employees/employeeSlice'
import "./style.css"

const Header = () => {

    const dispatch = useDispatch()
    const pageStatus = useSelector(state => state.employees.homePage)
    const changePage = () => dispatch(changePageStatus(pageStatus))

    return (
        <header>
            <h1 className="">HRnet</h1>
            {pageStatus
                ? <button onClick={changePage}><Link to={"/employeeList"}>View Employees</Link></button>
                : <button onClick={changePage}><Link to={"/"}>Back</Link></button>
            }
        </header>
  )
}

export default Header