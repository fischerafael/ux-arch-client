import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/design/styles/GlobalStyle'
import { Theme } from '../src/design/styles/Theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
