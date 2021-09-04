import React, { useContext, useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import formatNum from "../utils/FormatNumber"
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
  const { name, capital, population, area, languages, currencies } = currentCountry

  // const getCurrency = useCallback((currencies) => {
  //   const obj = Object.assign({}, currencies)
  //   let currency = []
  //   for (let i in obj) {
  //     currency.push(obj[i].name)
  //   }
  //   setMoney([...currency])
  // }, [])

  useEffect(() => {
    getCountry(alpha2Code)
    // eslint-disable-next-line
  }, [])

  // CODE WORKS!
  const obj = Object.assign({}, languages)
  let langs = []
  for (let i in obj) {
    langs.push(obj[i].name)
  }

  const currencyObj = Object.assign({}, currencies)
  let currency = []
  for (let i in currencyObj) {
    currency.push(currencyObj[i].name)
  }

  // const outputArr = (feature) => {
  //   const featureObj = Object.assign({}, feature)
  //   let newArr = []
  //   for (let i in featureObj) {
  //     newArr.push(featureObj[i].name)
  //   }
  //   console.log(newArr)
  // }
  // outputArr(languages)

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
              <strong>Capital: </strong>
              {capital}
              <br />
              <strong>Population: </strong>
              {formatNum(parseInt(population))}
              <br />
              <strong>Area: </strong>
              {formatNum(parseInt(area))}km&sup2;
            </p>
            <strong>Languages:</strong>
            <p>
              {langs.map((lang, index) => (
                <span key={index}>
                  {lang} <br />
                </span>
              ))}
            </p>
            <strong>Currency:</strong>
            <p>
              {currency.map((lang, index) => (
                <span key={index}>
                  {lang} <br />
                </span>
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
