import styled from 'styled-components'

import { OutlineButton } from '../../design-system/components/layout/Button'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'
import { ClickableLogo } from '../ClickableLogo'
import { CustomLink } from '../CustomLink'
import { Navigation } from './Navigation'

export const NavBar = () => {
    return (
        <NavBarContainer as="header" style={{ padding: '0 1rem' }}>
            <FlexContainer
                as="nav"
                style={{
                    maxWidth: '900px',
                    justifyContent: 'space-between'
                }}
            >
                <ClickableLogo />

                <Navigation />

                <CustomLink href="/app/login">
                    <OutlineButton
                        as="button"
                        style={{ width: '7rem', height: '2.5rem' }}
                    >
                        Entrar
                    </OutlineButton>
                </CustomLink>
            </FlexContainer>
        </NavBarContainer>
    )
}

const NavBarContainer = styled(FlexContainer)`
    height: 10vh;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 10;
`
