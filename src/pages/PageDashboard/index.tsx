import React from 'react'

import { NavBar } from '../../components/App/NavBar'
import { NavCard } from './components/NavCard'
import { LayoutGridResponsive } from '../../design/components/layout'
import { TextSubTitle } from '../../design/components/text'

import {
    TemplateDashboardMainScrollSection,
    TemplateDashboardSection
} from '../../design/components/templates'
import { ContainerDashboardMainSection } from '../../design/components/container'

export const PageDashboard = () => {
    return (
        <>
            <NavBar />
            <ContainerDashboardMainSection as="main">
                <TemplateDashboardMainScrollSection as="nav">
                    <TemplateDashboardSection as="section">
                        <TextSubTitle
                            style={{
                                padding: '1rem 0',
                                letterSpacing: '.1rem'
                            }}
                        >
                            EXPERIÊNCIAS ARQUITETÔNICAS
                        </TextSubTitle>
                        <LayoutGridResponsive>
                            <NavCard
                                cardTitle="Avaliar"
                                cardDescription="Auxilie o algoritmo do Ux Arch a ser mais preciso avaliando
                    projetos."
                                cardIcon="/assets/icons/evaluate.svg"
                                cardUrl="/app/dashboard/evaluate"
                            />
                            <NavCard
                                cardTitle="Consultar"
                                cardDescription="Descubra como usuários avaliaram os projetos que alimentam a inteligência artificial do Ux Arch"
                                cardIcon="/assets/icons/evaluate.svg"
                                cardUrl="/app/dashboard/evaluate"
                            />
                        </LayoutGridResponsive>
                    </TemplateDashboardSection>

                    <TemplateDashboardSection>
                        <TextSubTitle
                            style={{
                                padding: '1rem 0',
                                letterSpacing: '.1rem'
                            }}
                        >
                            MEUS PROJETOS
                        </TextSubTitle>
                        <LayoutGridResponsive>
                            <NavCard
                                cardTitle="Criar Projeto"
                                cardDescription="Cadastre seu projeto e descubra como os usuários irão experenciá-lo (em breve)."
                                cardIcon="/assets/icons/evaluate.svg"
                                cardUrl="/app/dashboard"
                            />
                        </LayoutGridResponsive>
                    </TemplateDashboardSection>
                </TemplateDashboardMainScrollSection>
            </ContainerDashboardMainSection>
        </>
    )
}
