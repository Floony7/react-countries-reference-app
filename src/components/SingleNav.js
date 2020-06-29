import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: palegoldenrod;
`

const SingleNav = (props) => {
  return (
    <>
      <Nav>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Return home
        </Link>
      </Nav>
    </>
  )
}

export default SingleNav
