export const formatData = data => {
    return {value: data.state_code, label: data.name}
}

export const formatDate = date => {
    return date.toISOString()
}

export const parseDate = date => {
    let dateParts = date.split("/")
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).toISOString()
}