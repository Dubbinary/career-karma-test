import { createGlobalStyle } from "styled-components";
export * as Theme from "./Theme";
export const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: white;
    color: black;

    box-sizing: border-box;
    display: block;

    margin: 0;
    padding: 0;


    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
