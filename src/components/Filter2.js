import React from "react"
import styled from "styled-components"
import "../App.css"
import SearchInput from "../styled/SearchInput"
import StyledSelect from "../styled/StyledSelect"

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
  return (
    <>
      <FilterBar>
        <h2 className="heading--purple">Search</h2>
        <div className="filter-inner">
          <SearchInput type="text" placeholder="Type country name..." />
          <StyledSelect>
            <option value="first">First option</option>
          </StyledSelect>
        </div>
      </FilterBar>
    </>
  )
}

export default Filter2
