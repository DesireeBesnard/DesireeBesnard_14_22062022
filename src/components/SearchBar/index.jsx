import React from 'react'

const SearchBar = ({filter, setFilter}) => {
  return (
    <span>
        Search:{" "}
        <input type="search" value={filter || ""}
            onChange={e => setFilter(e.target.value)} />
    </span>
  )
}

export default SearchBar