import React from 'react'

import { Text } from '../../../design-system/components/display/Text'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { CustomLink } from '../../CustomLink'

export const Navigation = () => {
    return (
        <FlexContainer
            as="ul"
            style={{
                margin: '0 1rem',
                justifyContent: 'flex-end'
            }}
        >
            {/* <CustomLink href="/app/evaluate">
                <Text as="p" style={{ fontSize: '.75rem', margin: '0 1rem' }}>
                    Atmosferas
                </Text>
            </CustomLink> */}
            <CustomLink href="/atmospheres">
                <Text as="p" style={{ fontSize: '.75rem', margin: '0 1rem' }}>
                    Atmosferas
                </Text>
            </CustomLink>
            <CustomLink href="/blog">
                <Text as="p" style={{ fontSize: '.75rem', margin: '0 1rem' }}>
                    Blog
                </Text>
            </CustomLink>
            {/* <CustomLink href="/about">
                <Text as="p" style={{ fontSize: '.75rem', margin: '0 1rem' }}>
                    Sobre
                </Text>
            </CustomLink> */}
        </FlexContainer>
    )
}
