import React from 'react'
import Router from 'next/router'
import { DisplayImage } from '../../../design/components/display'
import { LayoutFlexMobileNavBar } from '../../../design/components/layout'
import { handleNavigateTo } from '../../../helpers'
import { useMobileMenu } from '../../../context/MobileMenuContext'
import { ButtonDefaultContrast } from '../../../design/components/button'

export const NavBar = () => {
    const { handleOpenMobileMenu } = useMobileMenu()

    return (
        <LayoutFlexMobileNavBar
            as="nav"
            style={{
                width: '100%',
                height: '20vh',
                padding: '1rem',
                justifyContent: 'space-between'
            }}
        >
            <DisplayImage
                src="/assets/logo-dark.svg"
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavigateTo('/app/dashboard', Router)}
            />
            <ButtonDefaultContrast
                style={{ maxWidth: '2rem' }}
                onClick={() => handleOpenMobileMenu()}
            >
                +
            </ButtonDefaultContrast>
        </LayoutFlexMobileNavBar>
    )
}
