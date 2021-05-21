import { ThemeProvider } from 'styled-components'
import { CredentialsProvider } from '../src/context/CredentialsContext'
import { MobileMenuProvider } from '../src/context/MobileMenuContext'

import { GlobalStyle } from '../src/design/styles/GlobalStyle'
import { Theme } from '../src/design/theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <CredentialsProvider>
                    <MobileMenuProvider>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </MobileMenuProvider>
                </CredentialsProvider>
            </ThemeProvider>
        </>
    )
}
