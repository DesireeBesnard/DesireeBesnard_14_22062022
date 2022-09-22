import { deleteEmployee } from "../../features/employees/employeeSlice"
import { useDispatch } from "react-redux"

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