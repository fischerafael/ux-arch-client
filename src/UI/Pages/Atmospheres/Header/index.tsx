import React from 'react'
import { width } from '../../../design-system/styles/Theme'

import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

import DoubleLine from '../../../Components/Text/DoubleLine'
import { Text } from '../../../design-system/components/display/Text'

export const AtmospheresHeader = () => {
    return (
        <FlexContainer
            as="header"
            style={{
                marginTop: '10vh',
                padding: '1rem'
            }}
        >
            <FlexContainer
                as="section"
                style={{
                    maxWidth: `${width.lg}`,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <DoubleLine
                    firstLine="Confira as"
                    secondLine="Atmosferas cadastradas"
                />
                <Text
                    as="p"
                    style={{
                        padding: '1rem 0',
                        lineHeight: '1.5rem',
                        maxWidth: `${width.sm}`
                    }}
                >
                    Os projetos a seguir servem como base de dados para
                    alimentar a inteligência artificial por trás do UX Arch.
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
