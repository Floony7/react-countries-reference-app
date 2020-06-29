import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
  min-height: 2rem;
  width: 100%;
  padding-left: 5px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const StyledH4 = styled.h4`
  margin: 0.3em 0;
  max-width: 100%;
  cursor: pointer;
`

const Country = ({ name, alpha2Code, population }) => {
  return (
    <Card>
      <StyledH4>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={`/countries/${alpha2Code}`}>
          {name}
        </Link>
      </StyledH4>
    </Card>
  )
}
export default Country
