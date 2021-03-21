import { createGlobalStyle } from 'styled-components';

// TODO use colors from theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #308b5a;
    color: #fef72c;
    font-family: Helvetica, sans-serif;
    margin: 1em 2em;
  }
`;

export default GlobalStyle;
