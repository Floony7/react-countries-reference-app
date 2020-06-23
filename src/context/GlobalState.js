import React, { useReducer } from "react"
import axios from "axios"
import StateContext from "./StateContext"
import Reducer from "./Reducer"

export const CountriesProvider = ({ children }) => {
  const initialState = {
    loading: false,
    countries: [],
    filtered: null,
    region: "",
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  // Fetch data
  const fetchData = async () => {
    const res = await axios.get("https://restcountries.eu/rest/v2/all")
    dispatch({ type: "SET_DATA", payload: res.data })
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
        setRegion,
        fetchData,
        clearFilter,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
