import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --font-open: 'OpenSans';
  --font-poppins: 'Poppins';
  --font-source: 'SourceSansPro';


  --color-primary: #004AE2;
  --color-secondary: #000;
  --color-background: #EDF3FF;
  --color-gray: #BDBDBD;
  --color-white: #FFFFFF;


  --button-radius: 5px;
  --component-radius: 30px;
}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;