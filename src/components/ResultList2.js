import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import StateContext from "../context/StateContext"
import Country from "./Country"

const ColumnList = styled.ul`
  columns: 180px;

  @media (min-width: 500px) {
    columns: 250px;
  }

  li {
    list-style-type: none;
    padding-left: 0;
  }

  li:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const ResultList2 = (props) => {
  const { fetchData, filtered, countries } = useContext(StateContext)
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const code = countries.map((country) => `Country code is ${country.alpha2Code} and ${country.numericCode}`)
  console.log(code)
  return (
    <ColumnList>
      {filtered !== null
        ? filtered.map((country) => (
            <li key={country.numericCode}>
              <Country flag={country.flag} name={country.name} alpha2Code={country.alpha2Code} />
            </li>
          ))
        : countries.map((country) => (
            <li key={country.numericCode}>
              <Country population={country.population} name={country.name} alpha2Code={country.alpha2Code} />
            </li>
          ))}
    </ColumnList>
  )
}

export default ResultList2
