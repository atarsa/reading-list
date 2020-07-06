import React from "react";
import styled from "styled-components";

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
  return (
    <StyledHeader className="header">
      <h1>Reading List </h1>
      <p>You have x books to read, x books in progress and x books finished.</p>
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
