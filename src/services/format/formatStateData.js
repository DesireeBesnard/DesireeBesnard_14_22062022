export const formatData = data => {
    return {value: data.state_code, label: data.name}
}

const padTo2Digits = num =>  num.toString().padStart(2, '0')

export const formatDate = date => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/')
}