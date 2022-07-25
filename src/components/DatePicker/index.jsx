import React, { useState } from 'react'

function DatePicker(props) {

    const [date, setDate] = useState()

    return (
        <>
            <input type="date" id={props.id} onChange={e => setDate(e.target.value)}/>
        </>
    )
}

export default DatePicker