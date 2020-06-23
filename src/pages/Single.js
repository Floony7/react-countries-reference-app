import React from "react"
import styled from "styled-components"

const SingleWrap = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const FlagContainer = styled.div`
  grid-column: 1 / 2;

  img {
    width: 100%;
  }
`

const SingleContent = styled.div`
  grid-column: 2 / 3;
`

const Single = (props) => {
  return (
    <SingleWrap>
      <FlagContainer>
        <img src="https://restcountries.eu/data/cze.svg" alt="Czech" />
      </FlagContainer>
      <SingleContent>Content</SingleContent>
    </SingleWrap>
  )
}

export default Single
