import { createGlobalStyle } from "styled-components";
import "@fontsource/zen-antique-soft";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        /* scroll-behavior: smooth; */
        position: relative
    }

    *, *::before, *::after {
        box-sizing: inherit
    }

    body {
        background-color: #fff;
        margin: 0;
        padding: 80px 65px 0;
        font-size: 18px;
        font-family: 'Zen Antique Soft'
    }

    @media (max-width: 768px) {
        body {
             padding: 20px;
             font-size: 16px;
        }
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

    section {
        /* min-height: 100vh; */
    }
`;

export default GlobalStyle;
