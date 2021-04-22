import React from 'react'
import { FlexContainer } from '../../design-system/components/layout/FlexContainer'

export const LoadingPage = () => {
    return (
        <FlexContainer as="main" style={{ minHeight: '100vh' }}>
            Carregando...
        </FlexContainer>
    )
}
