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
                                letterSpacing: '.1rem',
                                fontWeight: 'bold'
                            }}
                        >
                            AVALIAR EXPERIÊNCIAS
                        </TextSubTitle>
                        <LayoutGridResponsive>
                            <NavCard
                                cardTitle="Avaliar"
                                cardDescription="Auxilie o algoritmo do Ux Arch a ser mais preciso na hora de prever como usuários irão se sentir em um projeto avaliando projetos e obras existentes."
                                cardIcon="/assets/icons/evaluate.svg"
                                cardUrl="/app/dashboard/evaluate"
                            />
                        </LayoutGridResponsive>
                    </TemplateDashboardSection>

                    <TemplateDashboardSection>
                        <TextSubTitle
                            style={{
                                padding: '1rem 0',
                                letterSpacing: '.1rem',
                                fontWeight: 'bold'
                            }}
                        >
                            MEUS PROJETOS
                        </TextSubTitle>
                        <LayoutGridResponsive>
                            <NavCard
                                cardTitle="Criar Projeto"
                                cardDescription="Crie projetos e descubra ainda nos estágios iniciais como será a experiência dos usuários ao utilizá-los (em breve)."
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
