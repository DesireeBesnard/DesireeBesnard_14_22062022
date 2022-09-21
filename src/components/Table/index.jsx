import React, {useState, useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import { useSelector } from 'react-redux'
import { COLUMNS } from "../../services/const.js"
import SearchBar from "../SearchBar"
import { useEdit, useDelete } from '../../services/const.js'

export const EmployeesTable = () => {

    /*const employeesDatas = useSelector(state => state.employees)
    const [data, setData] = useState(useMemo(() => employeesDatas, [employeesDatas]))*/
    const data = useSelector(state => state.employees)
    const columns = useMemo(() => COLUMNS, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        page, 
        nextPage,
        canNextPage,
        previousPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useEdit,
    useDelete)

    const { pageIndex, pageSize, globalFilter } = state
    
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
                        page.map(row => { 
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
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                <button onClick={()=> previousPage()} disabled={!canPreviousPage}>{"<"}</button>
                <button onClick={()=> nextPage()} disabled={!canNextPage}>{">"}</button>
                <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>{">>"}</button>
                <span>
                    Page {" "} <strong> {pageIndex + 1} of {pageOptions.length}{" "}</strong>
                </span>
                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1} 
                        onChange={e => {
                            const pageNUmber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNUmber)
                        }}/>
                </span>
                <select value={pageSize} 
                    onChange={ e => setPageSize(Number(e.target.value))}>
                        {[5, 10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}> Show {pageSize} </option>
                        ))}
                </select>
            </div>
        </>
    )
}