import Link from 'next/link'

import styled from 'styled-components'

import { Text } from '../../design-system/components/display/Text'

import { OutlineButton } from '../../design-system/components/layout/Button'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'
import { CustomLink } from '../CustomLink'

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
                <CustomLink href="/">
                    <FlexContainer
                        as="img"
                        src="/assets/logo/logo-navbar.svg"
                        alt="UX Arch"
                        style={{ width: '2rem' }}
                    />
                </CustomLink>

                <FlexContainer
                    as="ul"
                    style={{
                        margin: '0 1rem',
                        justifyContent: 'flex-end'
                    }}
                >
                    <CustomLink href="/blog">
                        <Text
                            as="p"
                            style={{ fontSize: '.75rem', margin: '0 1rem' }}
                        >
                            Blog
                        </Text>
                    </CustomLink>
                </FlexContainer>

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
    height: 10vh;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 10;
`
