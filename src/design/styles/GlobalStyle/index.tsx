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
        color: ${(props) => props.theme.colors.main};
    }

    a {
        text-decoration: none;
    }

    ::placeholder {
        color: ${(props) => props.theme.colors.grey};
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.constrastSecondary};
    }
`
