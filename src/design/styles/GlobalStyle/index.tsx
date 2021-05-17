import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => global}
`

const global = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        line-height: 1;
        font-size: 100%;
        color: #333;
    }
`
