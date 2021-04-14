import { createGlobalStyle, css, ThemeProvider } from 'styled-components'

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

    button {
        border: none;
        background: ${(props) => props.theme.colors.primary};
        color: white;
        font: inherit;
        font-weight: bold;
        font-size: 75%;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: 0.5s;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        &:hover {
            filter: brightness(75%);
        }
    }

    h1 {
        font-weight: 900;
    }
`
