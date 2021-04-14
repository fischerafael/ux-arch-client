import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/UI/design-system/styles/GlobalStyle'
import { theme } from '../src/UI/design-system/styles/Theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
