import React, { useContext, useState } from "react"
import StateContext from "../context/StateContext"
import styled from "styled-components"
import RegionButton from "../styled/RegionButton"
import ListTitle from "../styled/ListTitle"

const NavWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  background-color: palegoldenrod;

  .nav-inner {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
const RegionNav = (props) => {
  const { setRegion, clearFilter } = useContext(StateContext)
  const [title, setTitle] = useState("")

  const handleClick = (e) => {
    let region = e.target.dataset.value
    if (region) {
      setRegion(region)
      setTitle(region)
    } else {
      clearFilter()
    }
    // Pass region variable to action "SET_REGION"
  }

  return (
    <>
      <NavWrap>
        <h2 className="heading--purple">View countries by region</h2>
        <div className="nav-inner">
          <RegionButton data-value="Africa" inputColor="green" onClick={handleClick}>
            Africa
          </RegionButton>
          <RegionButton data-value="Asia" inputColor="crimson" onClick={handleClick}>
            Asia
          </RegionButton>
          <RegionButton data-value="Europe" inputColor="mediumblue" onClick={handleClick}>
            Europe
          </RegionButton>
          <RegionButton data-value="Oceania" inputColor="orangered" onClick={handleClick}>
            Oceania
          </RegionButton>
          <RegionButton data-value="Americas" inputColor="steelblue" onClick={handleClick}>
            The Americas
          </RegionButton>
        </div>
      </NavWrap>
      {/* <ListTitle>{title}</ListTitle> */}
    </>
  )
}

export default RegionNav
