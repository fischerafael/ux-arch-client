import React from 'react'
import Router from 'next/router'
import { DisplayImage } from '../../../design/components/display'
import {
    LayoutFlex,
    LayoutFlexMobileNavBar
} from '../../../design/components/layout'
import { handleNavigateTo } from '../../../helpers'
import { useMobileMenu } from '../../../context/MobileMenuContext'
import {
    ButtonDefault,
    ButtonDefaultContrast
} from '../../../design/components/button'
import { Theme } from '../../../design/theme'
import { useCredentials } from '../../../context/CredentialsContext'

export const NavBar = () => {
    // const { handleOpenMobileMenu } = useMobileMenu()
    const { handleLogout } = useCredentials()

    return (
        <LayoutFlex
            style={{
                width: '100%',
                height: '20vh',
                padding: '1rem'
            }}
        >
            <LayoutFlexMobileNavBar
                as="nav"
                style={{
                    maxWidth: `${Theme.width.large}`,
                    width: '100%',
                    height: '100%',

                    justifyContent: 'space-between'
                }}
            >
                <DisplayImage
                    src="/assets/logo-dark.svg"
                    style={{ cursor: 'pointer', width: '5rem' }}
                    onClick={() => handleNavigateTo('/app/dashboard', Router)}
                />
                <ButtonDefaultContrast
                    style={{ maxWidth: '5rem' }}
                    onClick={handleLogout}
                >
                    SAIR
                </ButtonDefaultContrast>
            </LayoutFlexMobileNavBar>
        </LayoutFlex>
    )
}
