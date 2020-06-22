import React from "react"
import styled from "styled-components"
import RegionButton from "../styled/RegionButton"

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
  return (
    <>
      <NavWrap>
        <h2 className="heading--purple">View countries by region</h2>
        <div className="nav-inner">
          <RegionButton inputColor="green">Africa</RegionButton>
          <RegionButton inputColor="crimson">Asia</RegionButton>
          <RegionButton inputColor="mediumblue">Europe</RegionButton>
          <RegionButton inputColor="orangered">Oceania</RegionButton>
          <RegionButton inputColor="steelblue">The Americas</RegionButton>
        </div>
      </NavWrap>
    </>
  )
}

export default RegionNav
