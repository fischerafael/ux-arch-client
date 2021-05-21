import React from 'react'
import { useMobileMenu } from '../../../context/MobileMenuContext'
import { ButtonDefaultContrast } from '../../../design/components/button'
import {
    LayoutFlex,
    LayoutFlexMobileMenu
} from '../../../design/components/layout'
import { VerticalNav } from '../VerticalNav'

export const MobileMenu = () => {
    const { handleCloseMobileMenu } = useMobileMenu()

    return (
        <LayoutFlexMobileMenu
            style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                background: 'white',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                gap: '1rem'
            }}
            onClick={() => handleCloseMobileMenu()}
        >
            <LayoutFlex
                style={{
                    width: '100%',
                    justifyContent: 'flex-end',
                    cursor: 'pointer'
                }}
            >
                <ButtonDefaultContrast style={{ maxWidth: '2rem' }}>
                    -
                </ButtonDefaultContrast>
            </LayoutFlex>
            <VerticalNav />
        </LayoutFlexMobileMenu>
    )
}
