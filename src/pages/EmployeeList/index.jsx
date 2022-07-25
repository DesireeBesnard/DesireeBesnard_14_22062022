import React, { useState } from 'react';
import ArrayData from "../../components/ArrayData"

function EmployeeList() {

    return (
        <div>
            <h1>Current Employees</h1>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>

            </table>
        </div>
    )
}

export default EmployeeList

