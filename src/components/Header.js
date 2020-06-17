import React from "react"
import styled from "styled-components"
import "../App.css"

// const LogoTitle = styled.h1`
//   margin: 0 auto;
//   padding: 0;
//   font-weight: 1000;
//   font-family: "Kanit", sans-serif;
//   background-image: linear-gradient(to right, rgb(121, 51, 153), rgb(53, 51, 144), rgb(102, 51, 153), rgb(153, 51, 99));
//   color: transparent;
//   background-clip: text;
// `

const HeadBg = styled.div`
  @media (min-width: 568px) {
    width: 60vw;
  }
  width: 75vw;
  background-color: palegoldenrod;
  margin: 0 auto;
`

const Header = (props) => {
  return (
    <header className="header">
      <div className="inner">
        <HeadBg>
          <h1 class="title">Country Reference</h1>
        </HeadBg>
      </div>
    </header>
  )
}

export default Header
