import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Page from "./components/Page"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Page>
    </Router>
  )
}

export default App
