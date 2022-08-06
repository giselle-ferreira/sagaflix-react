import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Helvetica', sans-serif;
    }

    body {
        background-color: #141414;
        color: #f0f0f0;
    }

    a {
        text-decoration: none;
        color: #f0f0f0;
    }

    li {
        list-style: none;
    }
`