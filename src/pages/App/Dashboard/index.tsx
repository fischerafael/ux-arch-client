import React from 'react'

import { useCredentials } from '../../../context/CredentialsContext'
import { Theme } from '../../../design/theme'
import { ICredentials } from '../../../entities/Credentials'

import { ButtonDefault } from '../../../design/components/button'
import { DisplayImage } from '../../../design/components/display'
import { LayoutFlex } from '../../../design/components/layout'
import { AnchorText, TextParagraph } from '../../../design/components/text'

interface Props {
    credentials: ICredentials
}

export const DashboardPage = ({ credentials }: Props) => {
    const { handleLogout } = useCredentials()

    return (
        <LayoutFlex
            as="main"
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <LayoutFlex
                as="aside"
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    width: '15rem',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    gap: '1rem'
                }}
            >
                <LayoutFlex
                    style={{
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'flex-start'
                    }}
                >
                    <DisplayImage src="/assets/logo-dark.svg" />
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
                        ATMOSFERAS & EXPERIÊNCIAS
                    </TextParagraph>

                    <AnchorText>Avaliar</AnchorText>
                    <AnchorText>Consultar</AnchorText>
                </LayoutFlex>
                <ButtonDefault
                    style={{ height: '3rem' }}
                    onClick={handleLogout}
                >
                    SAIR
                </ButtonDefault>
            </LayoutFlex>

            <LayoutFlex
                as="section"
                style={{
                    marginLeft: '15rem',
                    background: 'red',
                    height: '100%',
                    width: '100%'
                }}
            >
                Body
            </LayoutFlex>
        </LayoutFlex>
    )
}
