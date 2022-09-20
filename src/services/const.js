import { format } from "date-fns"
import { deleteEmployee } from "../features/employees/employeeSlice"
import { useDispatch } from "react-redux"

export const COLUMNS = [
    { 
        Header: 'First Name', 
        accessor: 'firstName'
    },
    { 
        Header: 'Last Name',
        accessor: 'lastName'
    },
    { 
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')}
    },
    { 
        Header: 'Department',
        accessor: 'department'
    },
    { 
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')}
    },
    { 
        Header: 'Street',
        accessor: 'street'
    },
    { 
        Header: 'City',
        accessor: 'city'
    },
    { 
        Header: 'State',
        accessor: 'state'
    },
    { 
        Header: 'Zip Code',
        accessor: 'zipCode'
    }
]

export const useEdit = hooks => {
    hooks.visibleColumns.push(columns => [
        ...columns,
        {
            id: "Edit",
            Header: "Edit",
            Cell: ({ row }) => {return (
                <button onClick={() => {
                    console.log(row.values)
                }}>
                    Edit
                </button>
            )}
        }
    ])
}

export const useDelete = hooks => {

    const dispatch = useDispatch()

    hooks.visibleColumns.push(columns => [
        ...columns,
        {
            id: "Delete",
            Header: "Delete",
            Cell: ({ row }) => {return (
                <button onClick={() => {
                    dispatch(deleteEmployee(row.values))
                }}>
                    Delete
                </button>
            )}
        }
    ])
}