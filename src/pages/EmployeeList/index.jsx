import React, { useState } from 'react';
import { EmployeesTable} from "../../components/Table"


function EmployeeList() {

    return (
        <div>
            <h1>Current Employees</h1>
            <EmployeesTable />
        </div>
    )
}

export default EmployeeList

