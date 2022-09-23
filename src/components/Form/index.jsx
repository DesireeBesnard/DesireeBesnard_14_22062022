import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select"
import departmentOptions from "../../data/departments.json"
import { getStateOptions } from "../../services/api/stateService";
import { formatDate } from "../../services/format/formatStateData";
import "./style.css"
import { addEmployee } from "../../features/employees/employeeSlice";
import {isRegistered} from "../../services/helpers.js"
import { Modal } from "@desireeb/react-modal"


function Form() {

    const employees = useSelector(state => state.employees.employees)
    const dispatch = useDispatch()
    const [stateOptions, setStateOptions] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
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

        if(!isRegistered(employees, newEmployee)){
            dispatch(addEmployee(newEmployee))
            e.target.reset()
            setSuccessMsg(true)
            return newEmployee
        } else {
            setSuccessMsg(false)
            return "Employee already registered"
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    id="first-name"
                    onChange={e => setFirstName(e.target.value)}
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    id="last-name"
                    onChange={e => setLastName(e.target.value)}
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                < DatePicker
                    selected={birthDate}
                    placeholderText="Birth date"
                    onChange={value => setBirthDate(value)}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />

                <label htmlFor="start-date">Start Date</label>
                < DatePicker
                    selected={startDate}
                    placeholderText="Start date"
                    onChange={value => setStartDate(value)}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />

                    <label htmlFor="street">Street</label>
                    <input 
                        id="street" 
                        placeholder="Street"
                        type="text" 
                        onChange={e => { setStreet(e.target.value) }}
                    />

                    <label htmlFor="city">City</label>
                    <input 
                        id="city" 
                        placeholder="City"
                        type="text" 
                        onChange={e => setCity(e.target.value)}
                    />

                    <label htmlFor="state">State</label>
                    <Select
                        options={stateOptions}
                        placeholder={'Select a state'}
                        onChange={value => setState(value.value)}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input 
                        id="zip-code" 
                        placeholder="Zip Code"
                        type="number" 
                        min="0"
                        onChange={e => setZipCode(e.target.value)} 
                    />

                <label htmlFor="department">Department</label>
                <Select
                    options={departmentOptions}
                    placeholder={'Select a department'}
                    onChange={value => setDepartment(value.value)}
                />
                <button 
                    className="submitBtn"
                    disabled=
                        { !firstName || !lastName || !birthDate || !startDate || !street || !city || !state || !zipCode || !department ? true : false}
                    onClick={() => setShowModal(true)}>Save
                </button>

                <Modal show={showModal} handleCloseBtn={() => setShowModal(false)}>
                    {successMsg
                        ? <h1>Employee Created!</h1> 
                        : <h1>Employee already registered!</h1>
                    }
                </Modal>

            </form>
        </>
    )
}

export default Form