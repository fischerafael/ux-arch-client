import styled from 'styled-components'

import { OutlineButton } from '../../design-system/components/layout/Button'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'
import { CustomLink } from '../CustomLink'
import { Navigation } from './Navigation'

export const NavBar = () => {
    return (
        <NavBarContainer as="header">
            <FlexContainer
                as="nav"
                style={{
                    maxWidth: '900px',
                    justifyContent: 'space-between',
                    padding: '1rem'
                }}
            >
                <CustomLink href="/">
                    <FlexContainer
                        as="img"
                        src="/assets/logo/logo-navbar.svg"
                        alt="UX Arch"
                        style={{ width: '1.5rem' }}
                    />
                </CustomLink>

                <Navigation />

                {/* <CustomLink href="/app/login">
                    <OutlineButton
                        as="button"
                        style={{ width: '7rem', height: '2.5rem' }}
                    >
                        Entrar
                    </OutlineButton>
                </CustomLink> */}
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
