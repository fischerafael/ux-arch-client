import React, { useEffect, useState } from 'react'

import { useCredentials } from '../../context/CredentialsContext'
import { IProjects } from '../../entities/Projects'
import { api } from '../../services/config/api'
import { handleFilterAlreadyEvaluatedProjects } from '../../helpers'

import { ContainerDashboardMainSection } from '../../design/components/container'
import {
    TemplateDashboardMainScrollSection,
    TemplateDashboardSection
} from '../../design/components/templates'

import { NavBar } from '../../components/App/NavBar'
import { TextSubTitle } from '../../design/components/text'
import { LayoutGridResponsive } from '../../design/components/layout'
import { ProjectCard } from './components/ProjectCard'

export const PageDashboardEvaluate = () => {
    const { credentials } = useCredentials()

    const [referenceProjects, setReferenceProjects] = useState<IProjects[]>([
        {} as IProjects
    ])

    console.log('REFERENCE PROJECTS', referenceProjects)

    useEffect(() => {
        ;(async function () {
            const { data } = await api.get('/projects')
            const rawProjects = data as IProjects[]
            const filteredProjects = handleFilterAlreadyEvaluatedProjects(
                rawProjects,
                credentials.id
            )
            // const shuffledProjects = handleShuffleProjects(filteredProjects)
            setReferenceProjects(filteredProjects)
        })()
    }, [])

    return (
        <>
            <NavBar />
            <ContainerDashboardMainSection as="main">
                <TemplateDashboardMainScrollSection as="nav">
                    <TemplateDashboardSection>
                        <TextSubTitle
                            style={{
                                padding: '1rem 0',
                                letterSpacing: '.1rem'
                            }}
                        >
                            SELECIONE UM PROJETO PARA AVALIAR
                        </TextSubTitle>
                        <LayoutGridResponsive>
                            {referenceProjects.length &&
                                referenceProjects.map((reference) => (
                                    <ProjectCard
                                        key={reference.id}
                                        project={reference}
                                        href={`/app/dashboard/evaluate/${reference.slug}`}
                                    />
                                ))}
                        </LayoutGridResponsive>
                    </TemplateDashboardSection>
                </TemplateDashboardMainScrollSection>
            </ContainerDashboardMainSection>
        </>
    )
}
