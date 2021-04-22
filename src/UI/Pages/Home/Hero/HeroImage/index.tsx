import React from 'react'

import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

export const HeroImage = () => {
    return (
        <FlexContainer as="section">
            <FlexContainer
                as="img"
                src="/assets/pages/home/hero-image.svg"
                alt="UX Arch Hero Image"
            />
        </FlexContainer>
    )
}
