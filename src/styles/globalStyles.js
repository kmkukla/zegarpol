import { createGlobalStyle } from "styled-components";
import "@fontsource/zen-antique-soft";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit
    }

    body {
        margin: 0;
        padding: 80px 65px 0;
        font-family: 'Zen Antique Soft'
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: "Zen Antique Soft"
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
