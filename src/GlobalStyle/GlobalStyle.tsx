import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #333;
        color: #b9b9b9;
    }

    a {
        text-decoration: none;
        color: #f0f0f0;
    }

    li {
        list-style: none;
    }
`