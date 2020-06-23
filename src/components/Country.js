import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
  min-height: 2rem;
  width: 100%;
  padding-left: 5px;
  display: flex;
  align-items: center;
`

const StyledH4 = styled.h4`
  margin: 0.3em 0;
  max-width: 100%;
  cursor: pointer;
`

const Country = ({ name, alpha2Code, flag }) => {
  return (
    <Card>
      <StyledH4>
        <Link to={`/countries/${alpha2Code}`}>{name}</Link>
      </StyledH4>
    </Card>
  )
}
export default Country
