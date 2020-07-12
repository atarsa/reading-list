import React, { useState, createContext, useContext, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { lightTheme, darkTheme } from "../styles/theme";
// Load typeface
require("typeface-oswald");
require("typeface-open-sans");

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);
const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    
  }
  body{
    background: ${(props) => props.theme.primaryLighter};
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

  .blur{
    filter: blur(10px)

  }
 
`;
const StyledWrapper = styled.div``;
const Layout = ({ children }) => {
  const localTheme = window.localStorage.getItem("reading-list-dark-theme")
    ? JSON.parse(window.localStorage.getItem("reading-list-dark-theme"))
    : false;

  const [isDarkTheme, setIsDarkTheme] = useState(localTheme);

  const toggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "reading-list-dark-theme",
      JSON.stringify(isDarkTheme)
    );

  }, [isDarkTheme]);

  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default Layout;
