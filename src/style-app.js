import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
*{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

  html{
    scroll-behavior:smooth !important;
  }
    
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  a{
  text-decoration: none;
  }
  ul{
  list-style: none;
  padding: 0;
  margin: 0;
  }
`;
