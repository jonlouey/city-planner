import React from "react"

const CitySearch = (props) => {
    return (
        <>
        <h3>Search New York City Sites</h3>
        <form>
            <input type="text" placeholder="search" value={props.searchTerm} onChange={props.searchChangeHandler}></input>
        </form>
        </>
    )
}

export default CitySearch