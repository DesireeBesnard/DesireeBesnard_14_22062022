import React from "react";
import DatePicker from '../DatePicker'
import "./style.css"
import { validForm } from "../../services/helper"

function Form() {

    const saveEmployee = e => {
        e.preventDefault()
        console.log('submission prevented')
    }

    return (
        <>
            <form onSubmit={saveEmployee}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                < DatePicker id="date-of-birth" />

                <label htmlFor="start-date">Start Date</label>
                < DatePicker id="start-date"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default Form