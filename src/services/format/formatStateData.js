//Form data from country API (form options)
export const formatData = data => {
    return {value: data.state_code, label: data.name}
}

//Format date when creating new employee
export const formatDate = date => {
    return date.toISOString()
}