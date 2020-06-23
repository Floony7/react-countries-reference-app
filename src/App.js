import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Page from "./components/Page"
import Home from "./pages/Home"
import { CountriesProvider } from "./context/GlobalState"

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Page>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Page>
      </Router>
    </CountriesProvider>
  )
}

export default App
