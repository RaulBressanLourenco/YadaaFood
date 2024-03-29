import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, button {
        font-family: Arial, Helvetica, sans-serif
    }

    .container {
        max-width: 1220px;
        height: 100%;
        margin: 0 auto;
        padding: 0 16px;
    }
`

export default GlobalStyle 