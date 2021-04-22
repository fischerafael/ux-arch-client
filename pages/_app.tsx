import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/UI/design-system/styles/GlobalStyle'
import { theme } from '../src/UI/design-system/styles/Theme'

import { PostsProvider } from '../src/hooks/usePosts'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <PostsProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </PostsProvider>
            </ThemeProvider>
        </>
    )
}
