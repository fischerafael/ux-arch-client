import React, { useEffect, useState } from 'react'
import Router from 'next/router'

import { ProjectCard } from '../../../ProjectCard'
import {
    LayoutFlex,
    LayoutGridResponsive
} from '../../../../design/components/layout'
import { TextParagraph, TextSubTitle } from '../../../../design/components/text'
import { IProjects } from '../../../../entities/Projects'
import { api } from '../../../../services/config/api'

export const EvaluateScreen = () => {
    const [referenceProjects, setReferenceProjects] = useState<IProjects[]>([
        {} as IProjects
    ])
    console.log('REFERENCE PROJECTS', referenceProjects)

    useEffect(() => {
        ;(async function () {
            const { data: referenceProjects } = await api.get('/projects')
            setReferenceProjects(referenceProjects)
        })()
    }, [])

    const handleNavigateToEvaluateProject = (project: IProjects) => {
        Router.push(`/app/dashboard/evaluate/${project.slug}`)
    }

    return (
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
            <LayoutFlex
                style={{
                    padding: '1rem 0',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'flex-start'
                }}
            >
                <TextSubTitle
                    style={{
                        letterSpacing: '.1rem'
                    }}
                >
                    AVALIAR
                </TextSubTitle>
                <TextParagraph style={{ paddingTop: '0.5rem' }}>
                    Selecione um projeto para avaliar
                </TextParagraph>
            </LayoutFlex>

            <LayoutGridResponsive>
                {referenceProjects.length &&
                    referenceProjects.map((reference) => (
                        <ProjectCard
                            key={reference.id}
                            project={reference}
                            onClick={() =>
                                handleNavigateToEvaluateProject(reference)
                            }
                        />
                    ))}
            </LayoutGridResponsive>
        </LayoutFlex>
    )
}
