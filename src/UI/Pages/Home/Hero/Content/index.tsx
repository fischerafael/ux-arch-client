import React from 'react'
import { useRouter } from 'next/router'

import { Text } from '../../../../design-system/components/display/Text'
import { DefaultButton } from '../../../../design-system/components/input'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

export const Content = () => {
    const router = useRouter()

    const handleNavigateToEvaluation = () => {
        router.push('/app/evaluate')
    }

    return (
        <FlexContainer
            as="section"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-end'
            }}
        >
            <Text as="h1" style={{ fontSize: '3rem', textAlign: 'end' }}>
                UX Arch
            </Text>
            <Text
                as="h2"
                style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    lineHeight: '1.5rem',
                    margin: '2rem 0',
                    textAlign: 'end'
                }}
            >
                Projete experiências e atmosferas arquitetônicas pensadas
                especificamente para seus usuários com o auxílio de inteligência
                artificial.
            </Text>
            <FlexContainer
                style={{
                    height: '4rem',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '.5rem'
                }}
            >
                <DefaultButton onClick={handleNavigateToEvaluation}>
                    Avaliar
                </DefaultButton>
                <DefaultButton disabled>Projetar</DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}
