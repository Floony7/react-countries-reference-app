import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "../App.css"

const HeadBg = styled.div`
  max-width: 100%;
  background-color: palegoldenrod;
  margin: 0 auto;
`

const Header = (props) => {
  return (
    <header className="header">
      <div className="inner inner--header">
        <Link to="/">
          <HeadBg>
            <h1 className="title">Country Reference</h1>
          </HeadBg>
        </Link>
      </div>
    </header>
  )
}

export default Header
