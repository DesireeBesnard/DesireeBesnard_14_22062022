import React from 'react';
import { EmployeesTable} from "../../components/Table"
import "./style.css"

function EmployeeList() {

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

