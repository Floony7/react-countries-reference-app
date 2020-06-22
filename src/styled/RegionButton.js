import styled from "styled-components"

const RegionButton = styled.span`
  width: 150px;
  height: 75px;
  background-color: ${(props) => props.inputColor || "teal"};
  border: 1px solid rebeccapurple;
  font-size: 18px;
  margin: 0 3px 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0;
    bottom: 0;
    z-index: -1;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in;
  }

  &:hover::after {
    transform: scaleY(1);
    transform-origin: top;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`

export default RegionButton
