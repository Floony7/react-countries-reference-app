import React, { useReducer } from "react"
import axios from "axios"
import StateContext from "./StateContext"
import Reducer from "./Reducer"

export const CountriesProvider = ({ children }) => {
  const initialState = {
    loading: false,
    countries: [],
    currentCountry: {},
    filtered: null,
    region: "",
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  // Fetch data
  const fetchData = async () => {
    const res = await axios.get("https://restcountries.eu/rest/v2/all")
    dispatch({ type: "SET_DATA", payload: res.data })
  }

  // Get country
  /* const getCountry = (code) => {
    const selected = state.countries.find((country) => {
      return country.alpha2Code === code
    })
    dispatch({ type: "GET_COUNTRY", payload: selected })
  } */
  const getCountry = async (code) => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
    dispatch({ type: "GET_COUNTRY", payload: res.data })
  }

  // Filter countries

  // Set region
  const setRegion = async (region) => {
    const regionFilter = state.countries.filter((country) => {
      return country.region === region
    })
    dispatch({ type: "SET_REGION", payload: regionFilter })
  }

  // Clear filter
  const clearFilter = () => dispatch({ type: "CLEAR_FILTER" })

  return (
    <StateContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        filtered: state.filtered,
        currentCountry: state.currentCountry,
        region: state.region,
        setRegion,
        fetchData,
        clearFilter,
        getCountry,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
