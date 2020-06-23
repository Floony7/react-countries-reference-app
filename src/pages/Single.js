import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import StateContext from "../context/StateContext"

const SingleWrap = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: palegoldenrod;
  color: #000;
  width: 100%;
  padding: 1rem;
`

const FlagContainer = styled.div`
  grid-column: 1 / 2;
  margin-right: 10px;
  img {
    width: 100%;
  }
`

const SingleContent = styled.div`
  grid-column: 2 / 3;
`

const Single = (props) => {
  let { alpha2Code } = useParams()
  const { getCountry, currentCountry } = useContext(StateContext)
  useEffect(() => {
    getCountry(alpha2Code)
    // eslint-disable-next-line
  }, [])

  return (
    <SingleWrap>
      <FlagContainer>
        <img src={currentCountry.flag} alt={currentCountry.name} />
      </FlagContainer>
      <SingleContent>Content: {currentCountry.name}</SingleContent>
    </SingleWrap>
  )
}

export default Single
