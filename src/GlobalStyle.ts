import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    margin: 1em 2em;
  }
`;

export default GlobalStyle;
