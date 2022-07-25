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
                    <tr>
                        <td>Désirée</td>
                        <td>Besnard</td>
                        <td>01/07/2022</td>
                        <td>25</td>
                        <td>31/10/1995</td>
                        <td>Avenue de l'observatoire</td>
                        <td>Besançon</td>
                        <td>Doubs</td>
                        <td>25000</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default EmployeeList

