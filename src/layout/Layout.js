import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { theme } from "../styles/theme";
// Load typeface
require("typeface-oswald");
require("typeface-open-sans");

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    
  }
  body{
    background: ${(props) => props.theme.primaryLighter};
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px; /* px fallback */
    font-size: 1.6rem; /* default font-size for document */
    line-height: 1.5; /* a nice line-height */

    color: ${(props) => props.theme.secondaryColor};
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Oswald', sans-serif;

  }

  *, *::before, *::after{
    box-sizing: border-box;
  }
 
`;
const StyledWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </ThemeProvider>
);

export default Layout;
