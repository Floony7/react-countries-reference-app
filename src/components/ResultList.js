import React, { useEffect, useState } from "react"
import Axios from "axios"
import styled from "styled-components"
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

const ResultList = (props) => {
  const [state, setState] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get("https://restcountries.eu/rest/v2/all")
      setState(response.data)
    }
    fetchData()
  }, [])

  /*  const random = () => {
    const randomNum = Math.round((Math.random() * state.length) + 1 )
    return 
  } */

  return (
    <ColumnList>
      {state.map((item) => {
        return (
          <li>
            <Country key={item.alpha2Code} flag={item.flag} name={item.name} />
          </li>
        )
      })}
    </ColumnList>
  )
}

export default ResultList
