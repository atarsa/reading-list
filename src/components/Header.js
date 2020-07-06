import React, { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  h1 {
    margin-top: 0;
    padding-top: 2rem;
  }
`;

const Header = () => {
  const { toRead, inProgress, finished } = useContext(BookContext);
  return (
    <StyledHeader className="header">
      <h1>Reading List </h1>
      <p>
        You have {toRead.length} book{toRead.length === 1 ? "" : "s"} to read,{" "}
        {inProgress.length} book{inProgress.length === 1 ? "" : "s"} in progress
        and {finished.length} book{finished.length === 1 ? "" : "s"} finished.
      </p>
      <p>
        Keep Reading!{" "}
        <span role="img" aria-label="books">
          📚
        </span>
      </p>
    </StyledHeader>
  );
};

export default Header;
