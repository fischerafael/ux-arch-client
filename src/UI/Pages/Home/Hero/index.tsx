import React from 'react'

import { Content } from './Content'
import { HeroImage } from './HeroImage'

import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { TwoColumnGrid } from '../../../design-system/components/layout/GridContainer'

export const Hero = () => {
    return (
        <FlexContainer
            as="main"
            style={{
                paddingTop: '10vh'
            }}
        >
            <TwoColumnGrid
                as="section"
                style={{
                    maxWidth: '900px',
                    minHeight: '90vh'
                }}
            >
                <HeroImage />
                <Content />
            </TwoColumnGrid>
        </FlexContainer>
    )
}
