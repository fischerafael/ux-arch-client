import React from 'react'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'
import { CustomLink } from '../CustomLink'

export const ClickableLogo = () => {
    return (
        <CustomLink href="/">
            <FlexContainer
                as="img"
                src="/assets/logo/logo-navbar.svg"
                alt="UX Arch"
                style={{ width: '1.5rem' }}
            />
        </CustomLink>
    )
}
