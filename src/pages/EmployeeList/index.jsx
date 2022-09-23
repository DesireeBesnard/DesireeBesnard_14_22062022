import React from 'react';
import {Link} from 'react-router-dom' 
import { EmployeesTable} from "../../components/Table"

function EmployeeList() {

    return (
        <div>
            <h1>Current Employees</h1>
            {/*<EmployeesTable />*/}
            <button><Link to={"/"}>Retour</Link></button>
        </div>
    )
}

export default EmployeeList

