import React from "react"
import styled from "styled-components"
import ResultList from "../components/ResultList"
import Window from "../styled/Window"

const Intro = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Home = (props) => {
  return (
    <Window>
      <Intro>
        <h2>Quick facts about every country on planet Earth!</h2>
        <p>This site is a helpful resource for finding quick facts about countries and regions of the world. The application was developed with React.</p>
      </Intro>
      <ResultList />
    </Window>
  )
}

export default Home
