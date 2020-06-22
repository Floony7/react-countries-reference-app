import React from "react"
import styled from "styled-components"
import ResultList from "../components/ResultList"
import Window from "../styled/Window"
import Filter from "../components/Filter"
// import RegionNav from "../components/RegionNav"

const Intro = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Home = (props) => {
  return (
    <Window>
      <Intro>
        <h2>Quick facts about every country on planet Earth!</h2>
        <p>This site is a helpful resource for finding quick facts about countries, territories and regions of the world. The application is a web development learning project made with React.</p>
      </Intro>
      <Filter />
      <ResultList />
    </Window>
  )
}

export default Home
