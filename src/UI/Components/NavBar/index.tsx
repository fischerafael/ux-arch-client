import styled from 'styled-components'

import { OutlineButton } from '../../design-system/components/layout/Button'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'

export const NavBar = () => {
    return (
        <NavBarContainer as="header">
            <FlexContainer
                as="nav"
                style={{
                    maxWidth: '900px',
                    justifyContent: 'space-between',
                    padding: '0 1rem'
                }}
            >
                <FlexContainer
                    as="img"
                    src="/assets/logo/logo-navbar.svg"
                    alt="UX Arch"
                    style={{ width: '2rem' }}
                />
                <OutlineButton
                    as="button"
                    style={{ width: '7rem', height: '2rem' }}
                >
                    Entrar
                </OutlineButton>
            </FlexContainer>
        </NavBarContainer>
    )
}

const NavBarContainer = styled(FlexContainer)`
    margin-top: -10vh;
    height: 10vh;
    background: #fcfcfc;
    position: fixed;
    z-index: 10;
`
