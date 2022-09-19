import React, {useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter} from 'react-table'
import { useSelector } from 'react-redux'
import { COLUMNS } from "../../services/const.js"
import SearchBar from "../SearchBar"

export const EmployeesTable = () => {

    const data = useSelector(state => state.employees)
    const columns = useMemo(() => COLUMNS, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy)

    const { globalFilter } = state
    
    return (
        <>
            <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    { //Loop over the header rows
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted? (column.isSortedDesc ? "⬇️" : "⬆️") : ""}
                                    </span>
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => { 
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}