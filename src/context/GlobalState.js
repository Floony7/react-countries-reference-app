import React, { useReducer } from "react"
import axios from "axios"
import StateContext from "./StateContext"
import Reducer from "./Reducer"

export const CountriesProvider = ({ children }) => {
  const initialState = {
    loading: false,
    countries: [],
    currentCountry: {},
    langs: {},
    filtered: null,
    regionName: "",
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

  // Get the languages for the selected country
  const getLanguages = async () => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;languages`)
    dispatch({ type: "GET_LANGUAGES", payload: res.data })
  }

  // const getLanguages = async (code) => {
  //   const res = await axios.get(`https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;languages`)
  //   const selected = res.data.find((country) => country.alpha2Code === code)
  //   console.log(selected)
  //   dispatch({ type: "GET_LANGUAGES", payload: selected })
  // }

  // Search countries
  const searchFilter = (text) => {
    dispatch({ type: "FILTERED", payload: text })
  }

  // Filter by stats
  const filterByPopulation = () => {
    const popSort = state.countries.map((country) => {
      return country.population
    })
    const sorted = popSort.sort((a, b) => a - b)
    dispatch({ type: "POPULATION_SORT", payload: sorted })
  }

  // Set region
  const setRegion = async (region) => {
    const regionFilter = state.countries.filter((country) => {
      return country.region === region
    })
    dispatch({ type: "SET_REGION", payload: regionFilter })
  }

  // Clear filter
  const clearFilter = () => dispatch({ type: "CLEAR_FILTER" })

  // Set region title
  const setRegionName = (text) => {
    dispatch({ type: "SET_REGION_NAME", payload: text })
  }

  return (
    <StateContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        filtered: state.filtered,
        currentCountry: state.currentCountry,
        region: state.region,
        langs: state.langs,
        setRegion,
        setRegionName,
        fetchData,
        searchFilter,
        clearFilter,
        getCountry,
        getLanguages,
        filterByPopulation,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
