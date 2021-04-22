import React from 'react'

import { Text } from '../../../../design-system/components/display/Text'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

export const Content = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >
            <Text as="h1" style={{ fontSize: '3rem' }}>
                UX Arch
            </Text>
            <Text
                as="h2"
                style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    lineHeight: '1.5rem',
                    margin: '2rem 0'
                }}
            >
                Projete experiências e atmosferas arquitetônicas pensadas
                especificamente para seus usuários com o auxílio de inteligência
                artificial.
            </Text>
            <FlexContainer
                as="button"
                style={{ height: '3rem', maxWidth: '10rem' }}
            >
                Projetar
            </FlexContainer>
        </FlexContainer>
    )
}
