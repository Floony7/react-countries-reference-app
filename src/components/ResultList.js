import React, { useEffect, useState } from "react"
import Axios from "axios"
import Country from "./Country"

const ResultList = (props) => {
  const [state, setState] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get("https://restcountries.eu/rest/v2/all")
      setState(response.data)
    }
    fetchData()
  }, [])
  return (
    <>
      <h2>List</h2>
      {state.map((item) => {
        return <Country key={item.alpha2Code} flag={item.flag} name={item.name} />
      })}
    </>
  )
}

export default ResultList
