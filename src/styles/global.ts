import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FAFAFA;
    --white: #FFFFFF;
    --gray-50: #ECEFF4;
    --gray-100: #E0E6ED;    
    --gray-200: #C0CCDA;    
    --gray-300: #8190A5;
    --gray-400: #47525E;
    --gray-500: #3B4252;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: var(--background);
    color: var(--gray-500);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;