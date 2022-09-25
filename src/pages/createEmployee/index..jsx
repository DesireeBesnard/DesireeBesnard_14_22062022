import React, { useEffect } from 'react';
import Form from '../../components/Form'
import { useDispatch } from 'react-redux';
import { changePageStatus} from '../../features/employees/employeeSlice'
import "./style.css"

function CreateEmployee() {

    const dispatch = useDispatch()

    useEffect(() => {
        //isHomePage in redux state set to true
        dispatch(changePageStatus(false))
    })

    return (
        <div className="container">
            <div className='form-container'>
                <h2>Create Employee</h2>
                < Form />
            </div>
        </div>
    )
}

export default CreateEmployee