/* 
  Types required:
  SET_DATA
  FILTER
  RANDOM
  SEARCH
  SET_LOADING
*/

export default (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        countries: action.payload,
      }
    case "FILTERED":
      return {
        ...state,
        filtered: state.countries.filter((country) => {
          const regex = new RegExp(`${action.payload}`, "gi")
          return country.name.match(regex) || country.alpha2Code.match(regex)
        }),
        loading: false,
      }
    case "SET_REGION":
      return {
        ...state,
        filtered: action.payload,
      }
    case "SET_REGION_NAME":
      return {
        ...state,
        regiionName: action.payload,
      }
    case "POPULATION_SORT":
      return {
        ...state,
        countries: action.payload,
      }
    case "GET_COUNTRY":
      return {
        ...state,
        currentCountry: action.payload,
      }
    default:
      return state
  }
}
