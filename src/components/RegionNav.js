import React, { useContext, useState } from "react"
// import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import StateContext from "../context/StateContext"
import styled from "styled-components"
import RegionButton from "../styled/RegionButton"
import Filter2 from "./Filter2"
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
const Intro = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Label = styled.span`
  color: #fff;
  text-decoration: none;
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
  }

  return (
    <>
      <NavWrap>
        <h2 className="heading--purple">View countries and territories by region</h2>
        <div className="nav-inner">
          <RegionButton data-value="Africa" inputColor="green" onClick={handleClick}>
            <NavHashLink to="#list">
              <Label>Africa</Label>
            </NavHashLink>
          </RegionButton>
          <NavHashLink to="#list">
            <RegionButton data-value="Asia" inputColor="crimson" onClick={handleClick}>
              <Label>Asia</Label>
            </RegionButton>
          </NavHashLink>
          <NavHashLink to="#list">
            <RegionButton data-value="Europe" inputColor="mediumblue" onClick={handleClick}>
              <Label>Europe</Label>
            </RegionButton>
          </NavHashLink>
          <NavHashLink to="#list">
            <RegionButton data-value="Oceania" inputColor="orangered" onClick={handleClick}>
              <Label>Oceania</Label>
            </RegionButton>
          </NavHashLink>
          <NavHashLink to="#list">
            <RegionButton data-value="Americas" inputColor="steelblue" onClick={handleClick}>
              <Label>The Americas</Label>
            </RegionButton>
          </NavHashLink>
          <Filter2 />
        </div>
      </NavWrap>
      <Intro>
        <ListTitle inputColor="white">{!title ? "All countries" : title}</ListTitle>
      </Intro>
    </>
  )
}

export default RegionNav
