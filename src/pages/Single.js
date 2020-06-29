import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import StateContext from "../context/StateContext"
import ListTitle from "../styled/ListTitle"
import SingleNav from "../components/SingleNav"

const PageWrap = styled.div`
  margin-top: 0;
`

const SingleWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  min-height: 40vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* margin-top: -5rem; */
`

const Img = styled.img`
  width: 100%;
  margin-right: 0.5rem;
  box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.3);
`

const InfoBlock = styled.div`
  margin-left: 1rem;
`

const Single = (props) => {
  let { alpha2Code } = useParams()
  const { getCountry, currentCountry } = useContext(StateContext)
  useEffect(() => {
    getCountry(alpha2Code)
    // eslint-disable-next-line
  }, [])

  // const languages = currentCountry.languages.map(({ name }) => {
  //   return <li>{name}</li>
  // })

  return (
    <PageWrap>
      <SingleNav />
      <SingleWrap>
        <div>
          <ListTitle inputColor="palegoldenrod">{currentCountry.name}</ListTitle>
          <InfoBlock>
            <p>
              <strong>Population: </strong>
              {currentCountry.population}
            </p>
            <p>
              <strong>Languages: </strong>
              <ul>
                <li>Languages list here...</li>
              </ul>
            </p>
          </InfoBlock>
        </div>
        <div>
          <Img src={currentCountry.flag} alt={currentCountry.name} />
        </div>
      </SingleWrap>
    </PageWrap>
  )
}

export default Single
