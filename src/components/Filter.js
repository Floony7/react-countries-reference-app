import React, { useContext } from "react"
import styled from "styled-components"
import "../App.css"
import SearchInput from "../styled/SearchInput"
import StyledSelect from "../styled/StyledSelect"
import RegionNav from "./RegionNav"
import StateContext from "../context/StateContext"

const FilterBar = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: palegoldenrod;

  .filter-inner {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
`

const Filter = (props) => {
  const { regionName } = useContext(StateContext)
  return (
    <>
      <RegionNav />
      <FilterBar>
        <h2 className="heading--purple">Search</h2>
        <div className="filter-inner">
          <SearchInput type="text" placeholder="Type country name..." />
          <StyledSelect>
            <option value="first">First option</option>
          </StyledSelect>
        </div>
        {regionName && <h2>{regionName}</h2>}
      </FilterBar>
    </>
  )
}

export default Filter
