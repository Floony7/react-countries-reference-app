import React, { useContext, useEffect, useState, useCallback } from "react"
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
  const [languageList, setLanguageList] = useState([])
  const { name, population, area, languages } = currentCountry

  const getLanguages = useCallback(() => {
    const obj = Object.assign({}, languages)
    for (let i in obj) {
      setLanguageList(obj[i].name)
    }
  }, [languages])

  useEffect(() => {
    getCountry(alpha2Code)
    getLanguages()
    // eslint-disable-next-line
  }, [])

  // CODE WORKS!
  // const obj = Object.assign({}, languages)
  // let langs = []
  // for (let i in obj) {
  //   langs.push(obj[i].name)
  // }

  // const languages = Object.values(curr)
  // console.log(currentCountry)
  // const langs = languages[19]
  // console.log(langs)

  return (
    <PageWrap>
      <SingleNav />
      <SingleWrap>
        <div>
          <ListTitle inputColor="palegoldenrod">{name}</ListTitle>
          <InfoBlock>
            <p>
              <strong>Population: </strong>
              {population}
              <br />
              <strong>Area: </strong>
              {area}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {languageList.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
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
