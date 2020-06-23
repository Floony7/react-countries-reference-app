import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Page from "./components/Page"
import Home from "./pages/Home"
import About from "./pages/About"
import Single from "./pages/Single"
import { CountriesProvider } from "./context/GlobalState"

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Page>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/countries/:alpha2Code" component={Single} />
          </Switch>
        </Page>
      </Router>
    </CountriesProvider>
  )
}

export default App
