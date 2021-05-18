import React from 'react'

import { useCredentials } from '../../../context/CredentialsContext'
import { Theme, width } from '../../../design/theme'
import { ICredentials } from '../../../entities/Credentials'
import { IProjects } from '../../../entities/Projects'

import { ButtonDefault } from '../../../design/components/button'
import { DisplayImage } from '../../../design/components/display'
import {
    LayoutFlex,
    LayoutGridDashboard,
    LayoutGridResponsive
} from '../../../design/components/layout'
import {
    AnchorText,
    TextParagraph,
    TextSubTitle
} from '../../../design/components/text'

interface Props {
    credentials: ICredentials
    referenceProjects: IProjects
}

export const DashboardPage = ({ credentials, referenceProjects }: Props) => {
    const { handleLogout } = useCredentials()

    console.log('REFERENCE PROJECTS', referenceProjects)

    return (
        <LayoutGridDashboard
            as="main"
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <LayoutFlex
                as="aside"
                style={{
                    width: '100%',
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
                        REFERÊNCIAS
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
                    height: '100%',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    overflowY: 'scroll',
                    padding: '1rem'
                }}
            >
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    REFERÊNCIAS
                </TextSubTitle>
                <LayoutGridResponsive>
                    <LayoutFlex
                        style={{
                            background: `${Theme.colors.constrastSecondary}`,
                            width: '100%',
                            padding: '2rem',
                            gap: '1rem',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            cursor: 'pointer'
                        }}
                    >
                        <DisplayImage
                            src="/assets/icons/evaluate.svg"
                            alt="evaluate"
                        />
                        <TextSubTitle style={{ fontWeight: 'bold' }}>
                            Avaliar
                        </TextSubTitle>
                        <TextParagraph style={{ fontSize: '0.5rem' }}>
                            Auxilie o algoritmo do Ux Arch a ser mais preciso
                            avaliando projetos.
                        </TextParagraph>
                    </LayoutFlex>
                    <LayoutFlex
                        style={{
                            background: `${Theme.colors.constrastSecondary}`,
                            width: '100%',
                            padding: '2rem',
                            gap: '1rem',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            cursor: 'pointer'
                        }}
                    >
                        <DisplayImage
                            src="/assets/icons/evaluate.svg"
                            alt="evaluate"
                        />
                        <TextSubTitle style={{ fontWeight: 'bold' }}>
                            Consultar
                        </TextSubTitle>
                        <TextParagraph style={{ fontSize: '0.5rem' }}>
                            Confira como os usuários do Ux Arch avaliaram outros
                            projetos.
                        </TextParagraph>
                    </LayoutFlex>
                </LayoutGridResponsive>
                <TextSubTitle
                    style={{
                        padding: '1rem 0',
                        letterSpacing: '.1rem'
                    }}
                >
                    PROJETOS
                </TextSubTitle>
                <LayoutGridResponsive>
                    <LayoutFlex
                        style={{
                            background: `${Theme.colors.constrastSecondary}`,
                            width: '100%',
                            padding: '2rem',
                            gap: '1rem',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            cursor: 'pointer'
                        }}
                    >
                        <DisplayImage
                            src="/assets/icons/evaluate.svg"
                            alt="evaluate"
                        />
                        <TextSubTitle style={{ fontWeight: 'bold' }}>
                            Criar Projeto
                        </TextSubTitle>
                        <TextParagraph style={{ fontSize: '0.5rem' }}>
                            (em breve)
                        </TextParagraph>
                    </LayoutFlex>
                </LayoutGridResponsive>
            </LayoutFlex>
        </LayoutGridDashboard>
    )
}
