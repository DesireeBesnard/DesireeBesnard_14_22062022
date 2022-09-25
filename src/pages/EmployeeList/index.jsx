import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EmployeesTable} from "../../components/Table"
import { changePageStatus} from '../../features/employees/employeeSlice'
import "./style.css"

function EmployeeList() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changePageStatus(true))
    })
 
    return (
        <div className='employees-container'>
            <div>
                <h2>Current Employees</h2>
                <EmployeesTable />
            </div>
        </div>
    )
}

export default EmployeeList

