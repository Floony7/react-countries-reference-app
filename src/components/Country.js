import React from "react"
import styled from "styled-components"

const Card = styled.div`
  min-height: 2rem;
  width: 100%;
  padding-left: 5px;
`

const StyledH4 = styled.h4`
  margin: 0.3em 0;
  max-width: 100%;
`

const Country = ({ name, flag }) => {
  return (
    <Card>
      <StyledH4>{name}</StyledH4>
    </Card>
  )
}
export default Country
