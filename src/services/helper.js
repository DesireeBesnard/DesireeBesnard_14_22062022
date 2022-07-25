export const validForm = (form) => {
    
    if (form.firstName.lenght === 0) {
        return false
    } else if (form.lastName.length === 0) {
        return false
    } else if (form.startDate.length === 0) {
        return false
    } else if (form.department.length === 0) {
        return false
    } else if (form.birthDate.length === 0) {
        return false
    } else if (form.street.length === 0) {
        return false
    } else if (form.city.length === 0) {
        return false
    } else if (form.state.length === 0) {
        return false
    } else if (form.zipCode.length === 0) {
        return false
    }

    return true
}