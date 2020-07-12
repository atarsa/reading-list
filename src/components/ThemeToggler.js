import React from "react";
import { useTheme } from "../layout/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background: grey;
  border-radius: 10px;

  button {
    position: absolute;
    top: 2px;
    left: 3px;
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.primaryColor};
    filter: drop-shadow(0 0 0.5rem #000);
    transition: transform 1s, background-color 2s;
    cursor: pointer;

    .tooltip {
      visibility: hidden;
      position: absolute;
      background: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.secondaryColor};
      padding: 0.5rem;
      display: block;
      width: 80px;
      top: 30px;
      left: -40px;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.5s ease-in-out;
    }

    :hover .tooltip {
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
      filter: drop-shadow(0 0 0 black);
    }
  }

  button.move-right {
    transform: translateX(18px);
  }
`;

const ThemeToggler = () => {
  const themeToggle = useTheme();

  const handleClick = (e) => {
    document.getElementById("themeToggler").classList.toggle("move-right");
    themeToggle.toggle();
  };

  return (
    <Wrapper aria-hidden="true">
      <button id="themeToggler" onClick={handleClick}>
        <span className="tooltip">Toggle Theme</span>
      </button>
    </Wrapper>
  );
};

export default ThemeToggler;
