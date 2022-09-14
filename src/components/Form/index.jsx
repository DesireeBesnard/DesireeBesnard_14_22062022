import React, { useState, useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select"
import departmentOptions from "../../data/departments.json"
import { getStateOptions } from "../../services/api/stateService";
import { formatDate } from "../../services/format/formatStateData";
import "./style.css"
import { addEmployee } from "../../features/employees/employeeSlice";


function Form() {

    const dispatch = useDispatch()
    const [stateOptions, setStateOptions] = useState([])

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")
    
    
    useEffect(() => {

        getStateOptions()
            .then(res => setStateOptions(res))
    }, [])


    const handleSubmit = e => {

        e.preventDefault()

        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: formatDate(birthDate),
            startDate: formatDate(startDate),
            department: department,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode
        }
        dispatch(addEmployee(newEmployee))
        return newEmployee
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="first-name">First Name</label>
                <input 
                    type="text" 
                    id="first-name" 
                    onChange={e => setFirstName(e.target.value)} 
                />

                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text" 
                    id="last-name"
                    onChange={e => setLastName(e.target.value)}
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                < DatePicker 
                    selected={birthDate}
                    onChange={ value => setBirthDate(value)}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
                
                <label htmlFor="start-date">Start Date</label>
                < DatePicker 
                    selected={startDate}
                    onChange={value => setStartDate(value)}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={e => {setStreet(e.target.value)}} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={e => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Select
                        options={stateOptions}  
                        onChange={value => setState(value.value)}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={e => setZipCode(e.target.value)} />
                </fieldset>

                <label htmlFor="department">Department</label>
                    <Select 
                        options={departmentOptions}
                        onChange={value => setDepartment(value.value)}
                    />
                <button disabled={!firstName || !lastName || !birthDate || !startDate || !street || !city || !state || !zipCode || !department ? true : false}>Save</button>
            </form>
        </>
    )
}

export default Form