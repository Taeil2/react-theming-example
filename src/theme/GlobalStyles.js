import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  // create-react-app defaults
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  // custom global styles
  html {
    background: ${({theme}) => theme.background};
    font-size: ${({theme}) => theme.size};
    color: ${({theme}) => theme.color};
  }
  h1 {
    font-size: 1.5em;
  }
`

export default GlobalStyles