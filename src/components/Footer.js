import React from "react"
import styled from "styled-components"

const Credits = styled.p`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
`

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="inner text-center">
        <Credits>Site developed with React by Fred Lunjevich, Auckland New Zealand. All rights reserved {new Date().getFullYear()}</Credits>
      </div>
    </footer>
  )
}

export default Footer
