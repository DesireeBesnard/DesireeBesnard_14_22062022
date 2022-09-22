export const isRegistered = (employees, employee) => {

    if(employees.findIndex(e => e.firstName === employee.firstName && e.dateOfBirth === employee.dateOfBirth) === -1){
        return false
    } else {
        return true
    }
}