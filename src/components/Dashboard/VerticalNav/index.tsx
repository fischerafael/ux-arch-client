import React from 'react'
import Router from 'next/router'
import { useCredentials } from '../../../context/CredentialsContext'
import { Theme } from '../../../design/theme'
import { handleNavigateTo } from '../../../helpers'
import { DisplayImage } from '../../../design/components/display'
import { LayoutFlex } from '../../../design/components/layout'
import { AnchorText, TextParagraph } from '../../../design/components/text'
import { ButtonDefaultContrast } from '../../../design/components/button'

export const VerticalNav = () => {
    const { credentials, handleLogout } = useCredentials()

    return (
        <>
            <LayoutFlex
                style={{
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'flex-start'
                }}
            >
                <DisplayImage
                    src="/assets/logo-dark.svg"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigateTo('/app/dashboard', Router)}
                />
                <LayoutFlex
                    style={{
                        flexDirection: 'column',
                        width: '100%',
                        padding: '2rem 0',
                        alignItems: 'flex-start'
                    }}
                >
                    <TextParagraph>Olá,</TextParagraph>
                    <TextParagraph style={{ fontWeight: 'bold' }}>
                        {credentials.name}
                    </TextParagraph>
                </LayoutFlex>
            </LayoutFlex>
            <LayoutFlex
                as="nav"
                style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    gap: '1rem'
                }}
            >
                <TextParagraph
                    style={{
                        color: `${Theme.colors.grey}`,
                        letterSpacing: '0.1rem',
                        fontSize: '0.5rem'
                    }}
                >
                    REFERÊNCIAS
                </TextParagraph>

                <AnchorText
                    onClick={() =>
                        handleNavigateTo('/app/dashboard/evaluate', Router)
                    }
                >
                    Avaliar
                </AnchorText>
            </LayoutFlex>
            <ButtonDefaultContrast
                style={{ height: '3rem' }}
                onClick={handleLogout}
            >
                SAIR
            </ButtonDefaultContrast>
        </>
    )
}
