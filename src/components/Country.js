import React from "react"
import styled from "styled-components"

const Card = styled.div`
  min-height: 3rem;
  width: 50%;
  padding-left: 5px;
`

const Country = ({ name, flag }) => {
  return (
    <Card>
      <h4>{name}</h4>
    </Card>
  )
}
export default Country
