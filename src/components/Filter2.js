import React, { useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import "../App.css"
import SearchInput from "../styled/SearchInput"
import StyledSelect from "../styled/StyledSelect"
import StateContext from "../context/StateContext"

const FilterBar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 0;
  background-color: palegoldenrod;

  .filter-inner {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
`

const Filter2 = (props) => {
  const { searchFilter, filtered, clearFilter } = useContext(StateContext)
  const text = useRef()

  useEffect(() => {
    filtered === null && (text.current.value = "")
  })

  // Handler for search functionality
  const handleChange = (e) => {
    if (text.current.value !== "") {
      searchFilter(e.target.value)
    } else {
      clearFilter()
    }
  }

  // const handlePopFilter = (e) => {
  //   if (e.target.checked) {
  //     filterByPopulation()
  //   }
  // }

  return (
    <>
      <FilterBar>
        <h2 className="heading--purple">Search</h2>
        <div className="filter-inner">
          <SearchInput ref={text} type="text" placeholder="Enter country name..." onChange={handleChange} />
          <StyledSelect>
            <option value="first">First option</option>
          </StyledSelect>
          {/* <label htmlFor="population">
            <input type="checkbox" name="population" onClick={handlePopFilter} />
          </label> */}
        </div>
      </FilterBar>
    </>
  )
}

export default Filter2
