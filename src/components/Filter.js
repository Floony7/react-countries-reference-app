import React from "react"
import styled from "styled-components"
import "../App.css"

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  background-color: palegoldenrod;
`

const Filter = (props) => {
  return (
    <FilterBar>
      <form>
        <input type="text" placeholder="Type country name..." />
      </form>
      <select>
        <option value="first">First option</option>
      </select>
    </FilterBar>
  )
}

export default Filter
