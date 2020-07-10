import React, { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import ThemeToggler from "../components/ThemeToggler";

const StyledHeader = styled.header`
  position: relative;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 2rem;
  padding: 2rem;

  .container {
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  h1 {
    margin-top: 0;
  }
  p {
    font-family: "Oswald";
    font-weight: 600;
  }
`;

const TogglerWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
`;

const Header = () => {
  const { toRead, inProgress, finished } = useContext(BookContext);

  return (
    <StyledHeader className="header">
      <div className="container">
        <h1>Reading List </h1>
        <p>
          You have {toRead.length} book{toRead.length === 1 ? "" : "s"} to read,{" "}
          {inProgress.length} book{inProgress.length === 1 ? "" : "s"} in
          progress and {finished.length} book{finished.length === 1 ? "" : "s"}{" "}
          finished.
        </p>
        <p>
          Keep Reading!{" "}
          <span role="img" aria-label="books">
            📚
          </span>
        </p>
      </div>
      <TogglerWrapper>
        <ThemeToggler />
      </TogglerWrapper>
    </StyledHeader>
  );
};

export default Header;
